import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProgressChartComponent } from '../progress-chart/progress-chart';

type GoalType =
  | 'weight-management'
  | 'energy-metabolic-health'
  | 'menopause-support'
  | 'lifestyle-reset';

type SupportType =
  | 'consultation'
  | 'structured-follow-up';

@Component({
  selector: 'app-progress-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProgressChartComponent],
  templateUrl: './progress-calculator.html',
  styleUrl: './progress-calculator.scss'
})
export class ProgressCalculatorComponent {
  calculatorForm: FormGroup;
  showResults = false;

  result = {
    estimatedWeightChangeKg: 0,
    estimatedWeightChangePercent: 0,
    focusMessage: 'A structured plan can support meaningful and sustainable lifestyle change.',
    endWeight: 0
  };

  chartData: { label: string; value: number }[] = [];

  constructor(private fb: FormBuilder) {
    this.calculatorForm = this.fb.group({
      heightCm: [170, [Validators.required, Validators.min(120), Validators.max(220)]],
      weightKg: [85, [Validators.required, Validators.min(40), Validators.max(250)]],
      goal: ['weight-management' as GoalType, [Validators.required]],
      supportPlan: ['structured-follow-up' as SupportType, [Validators.required]]
    });
  }

  calculate(): void {
    if (this.calculatorForm.invalid) {
      this.calculatorForm.markAllAsTouched();
      return;
    }

    const formValue = this.calculatorForm.getRawValue();
    const currentWeight = Number(formValue['weightKg'] ?? 0);
    const goal = formValue['goal'] as GoalType;
    const support = formValue['supportPlan'] as SupportType;

    let percentageLoss = 0.06;

    switch (goal) {
      case 'weight-management':
        percentageLoss = support === 'structured-follow-up' ? 0.12 : 0.07;
        break;
      case 'energy-metabolic-health':
        percentageLoss = support === 'structured-follow-up' ? 0.09 : 0.05;
        break;
      case 'menopause-support':
        percentageLoss = support === 'structured-follow-up' ? 0.08 : 0.04;
        break;
      case 'lifestyle-reset':
        percentageLoss = support === 'structured-follow-up' ? 0.10 : 0.06;
        break;
    }

    const estimatedWeightChangeKg = +(currentWeight * percentageLoss).toFixed(1);
    const estimatedWeightChangePercent = Math.round(percentageLoss * 100);
    const endWeight = +(currentWeight - estimatedWeightChangeKg).toFixed(1);

    let focusMessage = '';
    switch (goal) {
      case 'weight-management':
        focusMessage = 'Focus: structured weight management, appetite regulation, habits, and long-term sustainability.';
        break;
      case 'energy-metabolic-health':
        focusMessage = 'Focus: energy, metabolic health, sleep, routine, and personalised lifestyle medicine support.';
        break;
      case 'menopause-support':
        focusMessage = 'Focus: menopause-related wellbeing, weight, energy, symptoms, and structured GP-led support.';
        break;
      case 'lifestyle-reset':
        focusMessage = 'Focus: rebuilding routine, nutrition, activity, sleep, and consistent behaviour change.';
        break;
    }

    this.result = {
      estimatedWeightChangeKg,
      estimatedWeightChangePercent,
      focusMessage,
      endWeight
    };

    this.chartData = [
      { label: 'Today', value: currentWeight },
      { label: 'Month 1', value: +(currentWeight - estimatedWeightChangeKg * 0.2).toFixed(1) },
      { label: 'Month 2', value: +(currentWeight - estimatedWeightChangeKg * 0.4).toFixed(1) },
      { label: 'Month 3', value: +(currentWeight - estimatedWeightChangeKg * 0.6).toFixed(1) },
      { label: 'Month 4', value: +(currentWeight - estimatedWeightChangeKg * 0.75).toFixed(1) },
      { label: 'Month 5', value: +(currentWeight - estimatedWeightChangeKg * 0.9).toFixed(1) },
      { label: 'Month 6', value: endWeight }
    ];

    this.showResults = true;
  }

  editInputs(): void {
    this.showResults = false;
  }
}