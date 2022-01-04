
import React, { useState, useEffect } from 'react';
import API from "./Utilities";

// // async because its coming from database

// const fetchItems = async () => {
//     const [items, setItems] = useState([]);

//     const data = await fetch("link goes here");
//     const items = await data.json();
//     setItems(items); 
// }
// // empty paranthesis and bracket. only runs when component mounts 
// useEffect(() => {
//     fetchItems();
// }, []);
const [search, setSearch] = useState([

]);


function Search() {
    return (
        <div>
            <div className="search_container">
                <div className="form">
                    <div className="form">
                        <label htmlFor="search">Book:</label>
                        <input 
                        type="text"
                        onChange={handleChange}>

                        
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;
