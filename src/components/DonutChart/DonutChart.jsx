import './DonutChart.css'

function DonutChart() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Sales by <span>Category</span></div>
        <div className="card-action">See all →</div>
      </div>
      <div className="chart-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <canvas id="donutChart" width="200" height="200"></canvas>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 16px',
          justifyContent: 'center'
        }}>
          <span style={{
            fontSize: '12px',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#f5a623',
              display: 'inline-block'
            }}></span>
            Food & Drinks
          </span>
          <span style={{
            fontSize: '12px',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#3b82f6',
              display: 'inline-block'
            }}></span>
            Electronics
          </span>
          <span style={{
            fontSize: '12px',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#e8572a',
              display: 'inline-block'
            }}></span>
            Clothing
          </span>
          <span style={{
            fontSize: '12px',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22c55e',
              display: 'inline-block'
            }}></span>
            Household
          </span>
        </div>
      </div>
    </div>
  )
}

export default DonutChart;