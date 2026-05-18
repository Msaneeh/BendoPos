import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Dashboard />
      </div>
    </div>
  )
}

export default App;