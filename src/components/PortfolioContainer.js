import React from "react";

function PortfolioContainer({ portFolioList, deleteItemFromPortFolio }) {
  function handleDelete(stockId) {
    deleteItemFromPortFolio(stockId);
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portFolioList.map((stock) => {
        console.log("Stock ID:", stock.id);
        return (
          <div
            key={`portfolio-${stock.id}`}
            className="card"
            onClick={() => handleDelete(stock.id)}
          >
            <div className="card-body">
              <h5 className="card-title">{stock.name}</h5>
              <p className="card-text">{stock.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioContainer;