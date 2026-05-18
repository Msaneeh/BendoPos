import './Sidebar.css';

function Sidebar() {
  return (
    
    <aside className="sidebar">
  <div className="logo">
    <div className="logo-mark">
      <span>B</span> Bendo
    </div>
    <div className="logo-sub">POS Africa</div>
  </div>
  <nav>
    <div className="nav-label">Main</div>
    <div className="nav-item active">
      <span className="icon">📊</span> Analytics
    </div>
    <div className="nav-item">
      <span className="icon">🛒</span> Sales
    </div>
    <div className="nav-item">
      <span className="icon">📦</span> Inventory
    </div>
    <div className="nav-item">
      <span className="icon">🧾</span> Transactions
    </div>

    <div className="nav-section">
      <div className="nav-label">Manage</div>
      <div className="nav-item">
        <span className="icon">👥</span> Customers
      </div>
      <div className="nav-item">
        <span className="icon">🏷️</span> Products
      </div>
      <div className="nav-item">
        <span className="icon">⚙️</span> Settings
      </div>
    </div>
  </nav>
  <div className="sidebar-footer">
    <div className="user-card">
      <div className="avatar">AM</div>
      <div className="user-info">
        <div className="user-name">Amara Osei</div>
        <div className="user-role">Store Manager</div>
      </div>
    </div>
  </div>
    </aside> 

  )
}

export default Sidebar;
