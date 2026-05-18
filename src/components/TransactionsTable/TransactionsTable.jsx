import './TransactionsTable.css'

function TransactionsTable() {
  return (
    
    <div className="card">
        <div className="card-header">
          <div className="card-title">Recent <span>Transactions</span></div>
          <div className="card-action">View all →</div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Tx ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chidi Nwosu</td>
                <td className="tx-id">#TX-00821</td>
                <td className="amount-positive">₦12,500</td>
                <td><span className="status-pill paid">Paid</span></td>
              </tr>
              <tr>
                <td>Fatima Al-Amin</td>
                <td className="tx-id">#TX-00820</td>
                <td className="amount-positive">₦7,200</td>
                <td><span className="status-pill paid">Paid</span></td>
              </tr>
              <tr>
                <td>Kwame Asante</td>
                <td className="tx-id">#TX-00819</td>
                <td>₦3,950</td>
                <td><span className="status-pill pending">Pending</span></td>
              </tr>
              <tr>
                <td>Ngozi Eze</td>
                <td className="tx-id">#TX-00818</td>
                <td>₦18,000</td>
                <td><span className="status-pill failed">Failed</span></td>
              </tr>
              <tr>
                <td>Kofi Mensah</td>
                <td className="tx-id">#TX-00817</td>
                <td className="amount-positive">₦5,600</td>
                <td><span className="status-pill paid">Paid</span></td>
              </tr>
              <tr>
                <td>Amina Diallo</td>
                <td className="tx-id">#TX-00816</td>
                <td className="amount-positive">₦9,100</td>
                <td><span className="status-pill paid">Paid</span></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    
  )
}

export default TransactionsTable
