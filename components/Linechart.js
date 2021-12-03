import {Line} from 'react-chartjs-2';
import React from 'react';
import {CategoryScale, LinearScale} from 'chart.js';
import Chart from 'chart.js/auto'

Chart.register(CategoryScale)


const data = {

  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor:LinearScale['rgba(23, 255, 198, 0)'],
    borderColor: "Green",
    borderWidth: 1
  }]
}

export default () => ({
  render() {
    return (
      <div className="grafik">
        <Line
          data={data}
          options={{
              maintainAspectRatio: false,
              scales: {
                  yAxes: [
                      {
                          ticks: {
                              beginAtZero: true,
                          }
                      }
                  ]
              }
          }}
        />
      </div>
    );
  }
});