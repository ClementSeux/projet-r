import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Filters from "../components/Filters";
import TransactionsTable from "../components/TransactionsTable";

const Transactions = () => {
  return (
    <div className="container">
      {<Navbar />}
      {<Header />}
      <div className="table-head">
        {<Navigation />}
        {<Filters />}
      </div>
      {<TransactionsTable />}
    </div>
  );
};

export default Transactions;
