import React from "react";

class TrafficLigth extends React.Component {
    render(){
        return(<div className="traffic-light">
            <div className="light red"></div>
            <div className="light yellow"></div>
            <div className="light green"></div>
        </div>)
    }
}

export default TrafficLigth