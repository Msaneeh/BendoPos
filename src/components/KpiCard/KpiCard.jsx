import './KpiCard.css';

function KpiCard({ item }) {
  return (
    <div className="kpi-card">
      <div className="kpi-label">{item.label}</div>
      <div className="kpi-value">{item.value}</div>
      <span className={`badge ${item.trend}`}>{item.badge}</span>
      <div className="kpi-sub">{item.sub}</div>
    </div>
  )
}


export default KpiCard;