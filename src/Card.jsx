import React from "react";

function Card(props) {
    
    return (
        <div className={props.cardType}>
            <p>{props.type}</p>
            <h2>$ <span>{props.amt}</span></h2>
            <hr></hr>
            <ul>
                <li>{props.storage} Storage</li>
                <li>{props.users} Users Allowed</li>
                <li>Send up to {props.transfer}</li>
            </ul>
            <button>LEARN MORE</button>
        </div>
    );
}

export default Card;