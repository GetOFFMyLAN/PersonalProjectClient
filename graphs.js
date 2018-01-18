const Chart = require('chart.js');

var ctx = document.getElementById("hoursChart").getContext('2d');
var hoursChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: "Minutes Practiced",
          fill: true,
          lineTension: 0.1,
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [43, 13, 0, 24, 55, 39, 0]
        }
      ]
    }
});

var statChartId = document.getElementById("igStatsChart").getContext('2d');
var statChart = new Chart(statChartId, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: "Kill/Death Ratio",
        fill: false,
        lineTension: 0.3,
        pointBorderColor: "rgb(255, 255, 255)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(255, 255, 255)",
        pointHoverBorderColor: "rgb(255, 255, 255)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        borderColor: "rgb(219, 215, 6)",
        data: [3.4, 1.2, 2.5, 1.7, 2.2, 0.8, 1.1, 0.7, 3.1, 2.7, 1, 1.9]
      }, {
        label: "ADR",
        fill: false,
        lineTension: 0.3,
        pointBorderColor: "rgb(255, 255, 255)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(255, 255, 255)",
        pointHoverBorderColor: "rgb(255, 255, 255)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        borderColor: "rgb(66, 66, 66)",
        data: [249, 149, 167, 321, 133, 198, 156, 201, 176, 109, 147, 188]
      }, {
        label: "Win Percentage",
        fill: false,
        lineTension: 0.3,
        pointBorderColor: "rgb(255, 255, 255)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(255, 255, 255)",
        pointHoverBorderColor: "rgb(255, 255, 255)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        borderColor: "rgb(29, 154, 186)",
        data: [43, 55, 53, 51, 49, 50, 51, 53, 51, 48, 47, 56, 51]
      }, {
        label: "Accuracy",
        fill: false,
        lineTension: 0.3,
        pointBorderColor: "rgb(0, 0, 0)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(255, 255, 255)",
        pointHoverBorderColor: "rgb(255, 255, 255)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        borderColor: "rgb(255, 255, 255)",
        data: [100, 55, 67, 75, 93, 84, 93, 87, 71, 85, 99, 76]
      }
    ]
  }
})
