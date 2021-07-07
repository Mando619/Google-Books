import React from 'react';

function Saved(props) {
    return (
        <div>
            <div className="saved_container">
                Saved Books
                <div className="card">
                    <div className="row"></div>
                    <button className="btn btn-success" {...props}></button>
                </div>
            </div>
        </div>
    )
};

export default Saved;