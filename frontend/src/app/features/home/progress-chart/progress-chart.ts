import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-progress-chart',
  standalone: true,
  imports: [],
  templateUrl: './progress-chart.html',
  styleUrl: './progress-chart.scss'
})
export class ProgressChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  @Input() data: { label: string; value: number }[] = [];

  private initialized = false;

  ngAfterViewInit(): void {
    this.initialized = true;
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized && changes['data']) {
      this.renderChart();
    }
  }

  private renderChart(): void {
    const element = this.chartContainer.nativeElement;
    d3.select(element).selectAll('*').remove();

    const width = 520;
    const height = 260;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };

    const svg = d3
      .select(element)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('width', '100%')
      .style('height', 'auto');

    if (!this.data || this.data.length === 0) {
      return;
    }

    const x = d3
      .scalePoint<string>()
      .domain(this.data.map(d => d.label))
      .range([margin.left, width - margin.right]);

    const yMin = d3.min(this.data, d => d.value) ?? 0;
    const yMax = d3.max(this.data, d => d.value) ?? 100;

    const y = d3
      .scaleLinear()
      .domain([Math.floor(yMin - 2), Math.ceil(yMax + 2)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const area = d3
      .area<{ label: string; value: number }>()
      .x(d => x(d.label) ?? 0)
      .y0(height - margin.bottom)
      .y1(d => y(d.value))
      .curve(d3.curveMonotoneX);

    const line = d3
      .line<{ label: string; value: number }>()
      .x(d => x(d.label) ?? 0)
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(
        d3.axisBottom(x)
          .tickSize(0)
      )
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('text').attr('fill', '#7b6e98').style('font-size', '12px'));

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(
        d3.axisLeft(y)
          .ticks(5)
          .tickFormat(d => `${d}`)
      )
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').attr('x2', width - margin.left - margin.right).attr('stroke', '#ece5f7'))
      .call(g => g.selectAll('text').attr('fill', '#7b6e98').style('font-size', '12px'));

    svg
      .append('path')
      .datum(this.data)
      .attr('fill', 'rgba(157, 104, 255, 0.14)')
      .attr('d', area);

    svg
      .append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', '#8b46ff')
      .attr('stroke-width', 3)
      .attr('d', line);

    svg
      .selectAll('.dot')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.label) ?? 0)
      .attr('cy', d => y(d.value))
      .attr('r', 4)
      .attr('fill', '#8b46ff');
  }
}