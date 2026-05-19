import { categoryData } from '../../data/mockData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './DonutChart.css';

function DonutChart() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Sales by <span>Category</span></div>
        <div className="card-action">See all →</div>
      </div>
      <div className="donut-container">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              paddingAngle={3}
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{background:'#181b22', border:'1px solid #1f2330', borderRadius:'8px'}}
              itemStyle={{color:'#e8eaf0'}}
              formatter={v => [`${v}%`]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="donut-legend">
          {categoryData.map((item, index) => (
            <div key={index} className="legend-item">
              <span className="legend-dot" style={{background: item.color}}></span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DonutChart;