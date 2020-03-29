// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#ffffff';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Discount",
      lineTension: 0.3,
      backgroundColor: "rgba(255,0,0,0.2)",
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,0,0,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255,0,0,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [26, 50, 78, 41, 34, 18, 82, 70, 51, 97, 70, 31],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: this.max,// Your absolute max value
          callback: function (value) {
            return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Discount %',
        },
        gridLines: {
          color: "rgba(125, 125, 125, .75)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
