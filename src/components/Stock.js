import React from 'react'

class Stock extends React.Component {

  
  render() {
    const {addToPortfolio, removeFromPortfolio} = this.props
    const {name, ticker, price} = this.props.stock
    // console.log(this.props)



    return(
      <div>
         <div  onClick={() => addToPortfolio ? addToPortfolio(this.props.stock) : removeFromPortfolio(this.props.stock)}
            className="card">
            <div  className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text"> {ticker} {price}</p>
            </div>
         </div>
      </div>
    )
  }
};

export default Stock
