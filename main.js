(function() {
  var data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 0.5
      }
    ]
  };

  var options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  var ctx1 = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx1, {
    type: "bar",
    data: data,
    options: options
  });

  var ctx2 = document.getElementById("myPieChart").getContext("2d");
  var myPieChart = new Chart(ctx2, {
    type: "doughnut",
    data: data,
    options: options
  });

  var ctx3 = document.getElementById("myLineChart").getContext("2d");
  var myLineChart = new Chart(ctx3, {
    type: "line",
    data: data,
    options: options
  });
})();
