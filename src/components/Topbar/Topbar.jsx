import './Topbar.css';


function Topbar() {
  return (
    
    <header className="topbar">
    <div className="page-title">Sales <span>Analytics</span></div>
    <div className="topbar-right">
      <div className="live-badge">
        <div className="live-dot"></div> Live
      </div>
      <div className="date-filter">
        <button className="date-btn">7D</button>
        <button className="date-btn active">30D</button>
        <button className="date-btn">90D</button>
        <button className="date-btn">1Y</button>
      </div>
      <div className="icon-btn">🔔</div>
    </div>
  </header>
    
  )
}

export default Topbar;
