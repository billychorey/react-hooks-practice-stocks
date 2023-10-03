import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, addToPortfolio, portFolioList}) {


  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stockList.map((stock) => {
        return (
          <Stock 
          key={stock.id}
          id={stock.id} 
          ticker={stock.ticker} 
          name={stock.name} 
          type={stock.type}
          price={stock.price}
          addToPortfolio={addToPortfolio}
          stock={stock}
          portFolioList={portFolioList}
          />
        )
      })}
    </div>
  );
}

export default StockContainer;
