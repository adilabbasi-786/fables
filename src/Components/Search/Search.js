import React from "react";
import "./Search.css";
import { MdClose } from "react-icons/md";
import prod from "../../images/product3.jpg";

const Search = ({ setShowSearch }) => {
  return (
    <>
      <div className="search-modal">
        <div className="form-field">
          <input type="text" autoFocus placeholder="Search for Products" />
          <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
        </div>

        <div className="search-result-content">
          <div className="search-results">
            <div className="search-result-item">
              <div className="image-container">
                <img src={prod} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">Product name</span>
                <span className="desc">Product desc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
