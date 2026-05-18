import { kpiData } from '../../data/mockData';
import './KpiCard.css';

function KpiCard() {
  return (
    <div className="kpi-grid">
      {kpiData.map(item => (
        <div key={item.id} className="kpi-card">
          <div className="kpi-label">{item.label}</div>
          <div className="kpi-value">{item.value}</div>
          <span className={`badge ${item.trend}`}>{item.badge}</span>
          <div className="kpi-sub">{item.sub}</div>
        </div>
      ))}
    </div>
  )
}

export default KpiCard;