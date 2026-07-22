import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './progress-calculator.html',
  styleUrl: './progress-calculator.scss'
})
export class ProgressCalculatorComponent {

  currentWeight = 100;
  targetWeight = 80;
  height = 175;

  bmi = 0;
  healthyWeight = 0;
  weightToLose = 0;
  estimatedMonths = 0;
  progress = 0;

  circumference = 2 * Math.PI * 90;
  strokeOffset = this.circumference;

  constructor() {
    this.calculate();
  }

  calculate(): void {

    const heightMeters = this.height / 100;

    this.bmi = +(this.currentWeight /
      (heightMeters * heightMeters)).toFixed(1);

    this.weightToLose = Math.max(
      0,
      this.currentWeight - this.targetWeight
    );

    this.healthyWeight = +(24.9 *
      heightMeters *
      heightMeters).toFixed(1);

    this.estimatedMonths = Math.ceil(
      this.weightToLose / 4
    );

    this.progress =
      ((this.currentWeight - this.targetWeight) /
      this.currentWeight) * 100;

    this.progress = Math.min(
      Math.max(this.progress, 0),
      100
    );

    this.strokeOffset =
      this.circumference -
      (this.progress / 100) *
      this.circumference;
  }

  increaseWeight() {
    this.currentWeight++;
    this.calculate();
  }

  decreaseWeight() {
    if (this.currentWeight > this.targetWeight) {
      this.currentWeight--;
      this.calculate();
    }
  }

  increaseTarget() {
    this.targetWeight++;
    this.calculate();
  }

  decreaseTarget() {
    if (this.targetWeight > 40) {
      this.targetWeight--;
      this.calculate();
    }
  }

  increaseHeight() {
    this.height++;
    this.calculate();
  }

  decreaseHeight() {
    if (this.height > 120) {
      this.height--;
      this.calculate();
    }
  }

  get bmiStatus(): string {

    if (this.bmi < 18.5)
      return 'Underweight';

    if (this.bmi < 25)
      return 'Healthy';

    if (this.bmi < 30)
      return 'Overweight';

    return 'Obese';
  }

}