import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart,AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({handleInputChange,query}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          className="search-input"
          placeholder="Enter your search shoes"
        />
      </div>

      <div className="profile-container">
        <a href="#"><FiHeart className="nav-icons heart"/></a>
        <a href="#"><AiOutlineShoppingCart className="nav-icons cart"/></a>
        <a href="#"><AiOutlineUserAdd className="nav-icons user"/></a>
      </div>
    </nav>
  );
};

export default Nav;
