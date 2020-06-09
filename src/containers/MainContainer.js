import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'


class MainContainer extends Component {
  state = {
    stocks: [],
    portfolioStocks: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(stocks => {
      this.setState({ stocks })
    })
  }

  addToPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  removeFromPortfolio = (stockName) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(stock => stock!== stockName)
    })
  }

  removeFromPortfolio = stock => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s !== stock)
    })
  }
  
  sortStock = (method) => {
    let arrayCopy = []
    switch(method){
      case 'Alphabetically':
        arrayCopy = this.state.stocks.sort( (aStock, bStock) =>  aStock.ticker.toLowerCase().localeCompare(bStock.ticker))
        break
      case 'Price':
        arrayCopy = this.state.stocks.sort( (aStock, bStock) =>  aStock.price - bStock.price)
        break
    }
    this.setState({ stocks: arrayCopy })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar sortStock={this.sortStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} 
                addToPortfolio={this.addToPortfolio} 
              />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks}
                removeFromPortfolio={this.removeFromPortfolio}
                />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
