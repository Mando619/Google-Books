
import React, { useState, useEffect } from 'react';







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


function Search() {
    return (
        <div>
            <div className="search_container">
                <div className="card">
                    <div className="row">
                        <div className="form">
                            <label>Book</label>
                            <input type="text">
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;
