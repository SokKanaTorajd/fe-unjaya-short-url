import React, {useRef, useEffect} from 'react'
import Header2 from '../components/Header2'
import Chart from 'chart.js/auto'
// Page
function Linecart(props) {
    let chartRef = useRef();
  useEffect(() => {
  var ctx = document.getElementById('grafik')
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0,420);
  gradient.addColorStop(0, 'rgba(0, 99, 59, 1)');
  gradient.addColorStop(1, 'rgba(23, 255, 198, 0)');
      var nilaiX = ["Jan","Feb","March","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
      var nilaiY = [5,15,10,3,10,27,5,5,10,13,3,7]
        let chart = new Chart(chartRef.current, {
            type:'line',
              data: {
               
                  labels:nilaiX,
                  datasets:[{
                      label: 'SortURL',
                      fill:true,
                      backgroundColor:gradient,
                      data:nilaiY, 
                      cubicInterpolationMode: 'monotone',
                      tension: 0.4,
                      borderColor: "rgb(0, 184, 110)",
                  }],
                },
                options:{
                  responsive: true,
                    scales: {
                      y: {
                          beginAtZero: true,
                          display:true,
                      },
                      x:{
                        display:true,
                      }
                    },
                }
          });
    }, [])
    // Render
    return (
        <div>
            <canvas id="grafik" ref={chartRef} />
        </div>
    )
}

export default Linecart
