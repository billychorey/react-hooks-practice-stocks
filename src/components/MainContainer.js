import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([]);
  const [portFolioList, setPortFolioList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [originalStockList, setOriginalStockList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((stockList) => {
        setStockList(stockList);
        setOriginalStockList(stockList); // Store the original list
      });
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    const radioSelection = event.target.value;
    if (radioSelection === 'Alphabetically') {
      sortByName();
    } else {
      sortByPrice();
    }
  };

  function sortByName() {
    const sortedList = [...stockList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setStockList(sortedList);
  }

  function sortByPrice() {
    const sortedList = [...stockList].sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
    setStockList(sortedList);
  }

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value.toLowerCase();

    if (selectedOption !== '') {
      const filteredList = originalStockList.filter(
        (item) => item.type.toLowerCase() === selectedOption
      );
      setStockList(filteredList);
    } else {
      // Reset to the original list
      setStockList([...originalStockList]);
    }
  };

  function addToPortfolio(stock, stockId) {
    const isStockInPortfolio = portFolioList.some((stock) => stock.id === stockId);
    console.log(isStockInPortfolio)
    if (!isStockInPortfolio) {
      setPortFolioList((prevPortfolioList) => [...prevPortfolioList, stock]);
    } else {
      console.log("Stock already exists in the portfolio");
    }
  }  

  function deleteItemFromPortFolio(stockId) {
    setPortFolioList(prevPortfolioList =>
      prevPortfolioList.filter(item => item.id !== stockId)
    );
  }

  return (
    <div>
      <SearchBar handleOptionChange={handleOptionChange} handleSelectChange={handleSelectChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} addToPortfolio={addToPortfolio} portFolioList={portFolioList} />
        </div>
        <div className="col-4">
          <PortfolioContainer portFolioList={portFolioList} deleteItemFromPortFolio={deleteItemFromPortFolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
