import './Dashboard.css';
import Topbar from '../../components/Topbar/Topbar';
import KpiCard from '../../components/KpiCard/KpiCard';
import RevenueChart from '../../components/RevenueChart/RevenueChart';
import DonutChart from '../../components/DonutChart/DonutChart';
import TransactionsTable from '../../components/TransactionsTable/TransactionsTable';
import TopProducts from '../../components/TopProducts/TopProducts';

function Dashboard() {
  return (
    <>
      <Topbar />

      <div className="content">

        <div className="kpi-grid">
          <KpiCard />
        </div>

        <div className="charts-row">
          <RevenueChart />
          <DonutChart />
        </div>

        <div className="bottom-row">
          <TransactionsTable />
          <TopProducts />
        </div>

      </div>
    </>
  )
}

export default Dashboard;