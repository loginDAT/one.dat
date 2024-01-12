import React from "react";
import './main.css';
import HomePage from "./HomePgae/homepage";
import Header from './Header/header';

function AllPage() {
  return (
    <div className="AllPage">
        <Header/>
        <HomePage />
    </div>
  );
}

export default AllPage;
