import React, { useState } from "react";
import "./Search.css";
import loupe from "../../assets/images/loupe.png";
import "../../index.css";

function Search() {
  return (
    <div className="search">
      <div className="search__block">
        <img src={loupe} />
        <input placeholder="Поиск" />
      </div>
      <button>+ Добавить лот</button>
    </div>
  );
}

export default Search;
