// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#ffffff';

// Area Chart Example
var ctx = document.getElementById("tw3Chart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Oct-17","Oct-17", "Nov-17", "Nov-17", "Nov-17", "Dec-17", "Jan-18", "Feb-18", "Feb-18", "Feb-18", "Feb-18", "Apr-18", "Apr-18", "Jun-18", "Jun-18", "Jun-18", "Jul-18", "Sep-18", "Sep-18", "Oct-18", "Nov-18", "Nov-18", "Nov-18", "Nov-18", "Nov-18", "Dec-18", "Jan-19", "Feb-19", "Feb-19", "Apr-19", "Apr-19", "Jun-19", "Jun-19", "Jun-19", "Jul-19", "Sep-19", "Sep-19", "Oct-19", "Nov-19", "Nov-19", "Nov-19", "Nov-19", "Dec-19", "Dec-19", "Dec-19", "Dec-19", "Jan-20", "Jan-20", "Jan-20", "Mar-20", "Apr-20", "Apr-20", "Jun-20", "Jun-20", "Jul-20", "Jul-20", "Sep-20", "Sep-20"],
    datasets: [{
      label: "Price",
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
      data: [75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 36400, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 22500, 75000, 12500, 75000, 12500, 75000, 12500, 75000, 12500, 75000],
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
          callback: function (value) {
            return '$'+value; // convert it to percentage
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Price $',
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
