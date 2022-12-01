import React, { useState } from 'react';

function TrafficLigth(props) {

    const [lightOn, setLightOn] = useState(-1)
    const [purple, setPurple] = useState(false)
    const [cycle, setCycle] = useState(false)

    let purpleButton = <button className={"light purple" + ((lightOn == 3) ? "-on" : "")} onClick={() => setLightOn(3)}></button>

    let cycleButtonHadler = () => {


    }

    return (
        <div className="traffic-light">
            <button className={"light red" + ((lightOn == 0) ? "-on" : "")} onClick={() => setLightOn(0)}></button>
            <button className={"light yellow" + ((lightOn == 1) ? "-on" : "")} onClick={() => setLightOn(1)}></button>
            <button className={"light green" + ((lightOn == 2) ? "-on" : "")} onClick={() => setLightOn(2)}></button>
            {purple ? purpleButton : ""}
            <button className={'ctrl-button' + (cycle ? "-on" : "")} onClick={cycleButtonHadler}><i className="bi bi-arrow-repeat"></i></button>
            <button className={'ctrl-button' + (purple ? "-on" : "")} onClick={() => setPurple(purple ? false : true)}><i className="bi bi-plus-lg"></i></button>
        </div>)

}


export default TrafficLigth