import './TopProducts.css'

function TopProducts() {
  return (
    
     <div className="card">
        <div className="card-header">
          <div className="card-title">Top <span>Products</span></div>
          <div className="card-action">This month →</div>
        </div>
        <div className="product-list">
          <div className="product-item">
            <div className="product-rank">#1</div>
            <div className="product-icon">🍚</div>
            <div className="product-info">
              <div className="product-name">Bag of Rice (50kg)</div>
              <div className="product-units">312 units sold</div>
            </div>
            <div className="product-bar-wrap">
              <div className="product-bar-bg"><div className="product-bar-fill" style={{ width: '100%'}}></div></div>
            </div>
            <div className="product-revenue">₦936k</div>
          </div>
          <div className="product-item">
            <div className="product-rank">#2</div>
            <div className="product-icon">📱</div>
            <div className="product-info">
              <div className="product-name">Tecno Spark 20</div>
              <div className="product-units">88 units sold</div>
            </div>
            <div className="product-bar-wrap">
              <div className="product-bar-bg"><div className="product-bar-fill" style={{ width: '75%' }}></div></div>
            </div>
            <div className="product-revenue">₦704k</div>
          </div>
          <div className="product-item">
            <div className="product-rank">#3</div>
            <div className="product-icon">🧴</div>
            <div className="product-info">
              <div className="product-name">Shea Butter Cream</div>
              <div className="product-units">240 units sold</div>
            </div>
            <div className="product-bar-wrap">
              <div className="product-bar-bg"><div className="product-bar-fill" style={{ width: '58%' }}></div></div>
            </div>
            <div className="product-revenue">₦480k</div>
          </div>
          <div className="product-item">
            <div className="product-rank">#4</div>
            <div className="product-icon">💡</div>
            <div className="product-info">
              <div className="product-name">LED Solar Lantern</div>
              <div className="product-units">175 units sold</div>
            </div>
            <div className="product-bar-wrap">
              <div className="product-bar-bg"><div className="product-bar-fill" style={{ width: '42%'}}></div></div>
            </div>
            <div className="product-revenue">₦350k</div>
          </div>
          <div className="product-item">
            <div className="product-rank">#5</div>
            <div className="product-icon">👘</div>
            <div className="product-info">
              <div className="product-name">Ankara Print Fabric</div>
              <div className="product-units">198 units sold</div>
            </div>
            <div className="product-bar-wrap">
              <div className="product-bar-bg"><div className="product-bar-fill" style={{ width: '30%' }}></div></div>
            </div>
            <div className="product-revenue">₦297k</div>
          </div>
        </div>
      </div> 
    
  )
}

export default TopProducts
