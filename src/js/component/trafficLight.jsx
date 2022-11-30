import React from "react";

class TrafficLigth extends React.Component {
    render(){
        return(<div className="traffic-light">
            <button className="light red"></button>
            <button className="light yellow"></button>
            <button className="light green"></button>
        </div>)
    }
}

export default TrafficLigth