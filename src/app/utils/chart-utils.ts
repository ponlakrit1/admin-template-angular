import { ChartConfiguration } from "chart.js";

export default class ChartUtils {
  static getDoughnutDefaultOptions() : ChartConfiguration<'doughnut'>['options'] {
    return {
      responsive: false,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label(tooltipItem) {
              return tooltipItem.label;
            },
          }
        },
      }
    };
  }

  static getLineDefaultOptions() : ChartConfiguration<'line'>['options'] {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: true
        },
        datalabels: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label(tooltipItem) {
              return tooltipItem.label;
            },
          }
        },
      }
    };
  }

  static getBarVerticalOptions() : ChartConfiguration<'bar'>['options'] {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          anchor: 'end',
          align: 'top',
          offset: 5,
        }
      },
      layout: {
        padding: {
          top: 20
        }
      },
    };
  }

  static getBarHorizontalOptions() : ChartConfiguration<'bar'>['options'] {
    return {
      responsive: true,
      indexAxis: 'y' as const,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {       
          anchor: 'end',
          color: '#FFF',
          formatter: function(value, context) {
            return value + '       ';
          }
        },
      },
      layout: {
        padding: {
          right: 20
        }
      },
    };
  }
}