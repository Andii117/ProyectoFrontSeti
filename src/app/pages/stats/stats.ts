import { Component, AfterViewInit } from '@angular/core';
import { DnaHistoryService } from '../../services/dna-history';
import { Chart } from 'chart.js/auto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stats',
  imports: [RouterLink],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  constructor(private historyService: DnaHistoryService) {}

  ngAfterViewInit(): void {
    this.generateCharts();
  }

  generateCharts() {
    const history = this.historyService.getHistory();

    const grouped: any = {};

    history.forEach((record) => {
      const date = new Date(record.date).toLocaleDateString();

      if (!grouped[date]) {
        grouped[date] = {
          mutants: 0,
          humans: 0,
        };
      }

      if (record.isMutant) {
        grouped[date].mutants++;
      } else {
        grouped[date].humans++;
      }
    });

    const labels = Object.keys(grouped);

    const mutants = labels.map((d) => grouped[d].mutants);
    const humans = labels.map((d) => grouped[d].humans);

    const totals = labels.map((d) => grouped[d].mutants + grouped[d].humans);

    const ratios = labels.map((d) => grouped[d].mutants / (grouped[d].mutants + grouped[d].humans));

    this.createMutantChart(labels, mutants, humans);
    this.createRatioChart(labels, ratios);
    this.createTotalChart(labels, totals);
  }

  createMutantChart(labels: any, mutants: any, humans: any) {
    new Chart('mutantChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Mutantes', data: mutants },
          { label: 'Humanos', data: humans },
        ],
      },
    });
  }

  createRatioChart(labels: any, ratios: any) {
    new Chart('ratioChart', {
      type: 'line',
      data: {
        labels,
        datasets: [{ label: 'Ratio Mutante', data: ratios }],
      },
    });
  }

  createTotalChart(labels: any, totals: any) {
    new Chart('totalChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [{ label: 'Total análisis', data: totals }],
      },
    });
  }
}
