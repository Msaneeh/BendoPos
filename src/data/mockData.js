// ── KPI CARDS ──
export const kpiData = [
  {
    id: 1,
    label: 'Total Revenue',
    value: '₦4,821,500',
    badge: '↑ 18.4%',
    trend: 'up',
    sub: 'vs last 30 days',
  },
  {
    id: 2,
    label: 'Total Orders',
    value: '1,347',
    badge: '↑ 9.2%',
    trend: 'up',
    sub: 'vs last 30 days',
  },
  {
    id: 3,
    label: 'Avg. Order Value',
    value: '₦3,579',
    badge: '↑ 4.1%',
    trend: 'up',
    sub: 'vs last 30 days',
  },
  {
    id: 4,
    label: 'Refunds',
    value: '₦128,400',
    badge: '↑ 2.3%',
    trend: 'down',
    sub: 'vs last 30 days',
  },
];

// ── REVENUE CHART ──
export const revenueData = {
  labels: ['Apr 18','Apr 21','Apr 24','Apr 27','Apr 30','May 3','May 6','May 9','May 12','May 15','May 17'],
  values: [210000, 185000, 260000, 230000, 310000, 290000, 375000, 340000, 410000, 390000, 480000],
};

// ── DONUT CHART ──
export const categoryData = [
  { label: 'Food & Drinks', value: 42, color: '#f5a623' },
  { label: 'Electronics',   value: 28, color: '#3b82f6' },
  { label: 'Clothing',      value: 18, color: '#e8572a' },
  { label: 'Household',     value: 12, color: '#22c55e' },
];

// ── TRANSACTIONS ──
export const transactions = [
  { id: '#TX-00821', customer: 'Chidi Nwosu',   amount: '₦12,500', status: 'paid'    },
  { id: '#TX-00820', customer: 'Fatima Al-Amin', amount: '₦7,200',  status: 'paid'    },
  { id: '#TX-00819', customer: 'Kwame Asante',   amount: '₦3,950',  status: 'pending' },
  { id: '#TX-00818', customer: 'Ngozi Eze',      amount: '₦18,000', status: 'failed'  },
  { id: '#TX-00817', customer: 'Kofi Mensah',    amount: '₦5,600',  status: 'paid'    },
  { id: '#TX-00816', customer: 'Amina Diallo',   amount: '₦9,100',  status: 'paid'    },
];

// ── TOP PRODUCTS ──
export const topProducts = [
  { rank: 1, icon: '🍚', name: 'Bag of Rice (50kg)',  units: 312, bar: 100, revenue: '₦936k' },
  { rank: 2, icon: '📱', name: 'Tecno Spark 20',      units: 88,  bar: 75,  revenue: '₦704k' },
  { rank: 3, icon: '🧴', name: 'Shea Butter Cream',   units: 240, bar: 58,  revenue: '₦480k' },
  { rank: 4, icon: '💡', name: 'LED Solar Lantern',   units: 175, bar: 42,  revenue: '₦350k' },
  { rank: 5, icon: '👘', name: 'Ankara Print Fabric', units: 198, bar: 30,  revenue: '₦297k' },
];

// ── NAV ITEMS ──
export const navItems = [
  { icon: '📊', label: 'Analytics',    active: true  },
  { icon: '🛒', label: 'Sales',        active: false },
  { icon: '📦', label: 'Inventory',    active: false },
  { icon: '🧾', label: 'Transactions', active: false },
];

export const navItemsBottom = [
  { icon: '👥', label: 'Customers', active: false },
  { icon: '🏷️', label: 'Products',  active: false },
  { icon: '⚙️', label: 'Settings',  active: false },
];