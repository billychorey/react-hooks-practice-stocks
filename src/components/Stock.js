import React from "react";

function Stock({ name, price, stock, addToPortfolio, portFolioList}) {
  function handleClick() {
    addToPortfolio(stock, stock.id)
  }

  

  return (
    <div>
      <div className="card" onClick={() => handleClick()}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
