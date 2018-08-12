import React from 'react';

import './User.css'

export default (props) => {
    return (
        <div className="user">
            <h2>{props.username}</h2>
            <p className="email">Email: {props.email}</p>
            <p><strong>Favorite movie:</strong> {props.movie}</p>
            <p><strong>Favorite book: </strong>{props.book}</p>
        </div>
    )
}