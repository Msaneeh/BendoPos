import './RevenueChart.css'

function RevenueChart() {
  return (
    
     <div className="card">
        <div className="card-header">
          <div className="card-title">Revenue <span>Trend</span></div>
          <div className="card-action">Export →</div>
        </div>
        <div className="chart-container">
          <canvas id="revenueChart" height="240"></canvas>
        </div>
      </div> 
    
  )
}

export default RevenueChart;
