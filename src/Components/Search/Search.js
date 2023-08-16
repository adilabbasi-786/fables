import React, { useEffect, useState } from "react";
import "./Search.css";
import { MdClose } from "react-icons/md";
import prod from "../../images/product3.jpg";
import { useNavigate,Link } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const navigate=useNavigate()
  const [query, setQuery]=useState("")

  const [data,setData]=useState([])
  useEffect(()=>{
    const getData=async()=>{
      if(query.length){
        let response=await fetch(`http://localhost:1337/api/products?populate=*&filters[title][$contains]=${query}`)
        let {data}=await response.json()
        setData(data)
      } 
      else{
        setData(null)
      }
    }
    getData()
  },[query])
  console.log()
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div className="search-modal">
        <div className="form-field">
          <input type="text" autoFocus placeholder="Search for Products"  value={query} onChange={onChange}/>
          <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
        </div>

        <div className="search-result-content">
          <div className="search-results">
            {
              data?.map((item)=>(

            <div className="search-result-item" key={item.id} onClick={() => {
              navigate("/singleProduct/" + item.id);
              setShowSearch(false);
            }} >
              
              
              <div className="image-container">
                <img src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{item?.attributes?.title}</span>
                <span className="desc">{item?.attributes?.desc}</span>
              </div>
          
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
