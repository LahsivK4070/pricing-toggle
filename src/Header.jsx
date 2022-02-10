import React from "react";

function Header(props) {
    
    return (
        <header>
            <h1>Our Pricing</h1>
            <div className="toggle-area">
                <p className="header-p1">Annually</p>
                <label class="switch">
                    <input type="checkbox" onClick={ props.onToggle }/>
                    <span class="slider round"></span>
                </label>
                <p className="header-p2">Monthly</p>
            </div>
        </header>
    );
}

export default Header;