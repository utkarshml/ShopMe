import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import "../../assets/scss/header.scss";
function Header() {
  const [value , setValue] = useState([])
  return (
    <React.Fragment>
      <header>
        <div className="logo">Shop<div>Me</div></div>
        <div className="search">
          <form className="search-bar">
            <input  value={value} type="text" onChange={(e) => setValue(e.target.value)} className="search" placeholder="Search..." />
            <button><AiOutlineSearch style={{
              fontWeight: "bold"
            }}/></button>
          </form>
        </div>
      </header>
    </React.Fragment>
  );
}


export default Header;
