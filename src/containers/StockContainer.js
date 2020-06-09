import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props)
    const {stocks, addToPortfolio } = this.props
    return (
      <div>
        <h2>Stocks</h2>
        { stocks.map(stock => <Stock key={stock.id}  stock={stock} 
        addToPortfolio={addToPortfolio}/>)}
      </div>
    );
  }

}

export default StockContainer;
