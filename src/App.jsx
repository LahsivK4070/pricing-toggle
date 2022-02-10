import React, { useState } from "react";
import Header from "./Header";
import Card from "./Card";

function App() {

    let [isClicked, handleClicked] = useState(false);

    function handleToggle() {
        handleClicked(!isClicked);
    }
    
    return (
        <div>
            <Header 
                onToggle={handleToggle}
            />
            <div className="card-div">
                <Card
                    cardType="basic"
                    type="Basic"
                    amt={isClicked ? "19.99" : "199.99"}
                    storage="500 GB"
                    users="2"
                    transfer="3 GB"
                />
                <Card 
                    cardType="pro"
                    type="Professional"
                    amt={isClicked ? "24.99" : "249.99"}
                    storage="1 TB"
                    users="5"
                    transfer="10 GB"
                />
                <Card 
                    cardType="master"
                    type="Master"
                    amt={isClicked ? "39.99" : "399.99"}
                    storage="2 TB"
                    users="10"
                    transfer="20 GB"
                />
            </div>
        </div>
    );
}

export default App;