import React, { useState, useEffect } from 'react';

function TrafficLigth(props) {

    const [lightOn, setLightOn] = useState(-1)
    const [lightsQuantity, setPurple] = useState(3)
    const [cycle, setCycle] = useState(true)

    useEffect(() => {
        const id = setInterval(() => {
            if (cycle) {
                setLightOn(a => ((a < lightsQuantity-1) ? a + 1 : 0))
            }
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [cycle, lightsQuantity])

    let purpleButton = <button className={"light purple" + ((lightOn == 3) ? "-on" : "")} onClick={() => setLightOn(3)}></button>

    return (
        <div className="traffic-light">
            <button className={"light red" + ((lightOn == 0) ? "-on" : "")} onClick={() => setLightOn(0)}></button>
            <button className={"light yellow" + ((lightOn == 1) ? "-on" : "")} onClick={() => setLightOn(1)}></button>
            <button className={"light green" + ((lightOn == 2) ? "-on" : "")} onClick={() => setLightOn(2)}></button>
            {lightsQuantity == 4? purpleButton : ""}
            <button className={'ctrl-button' + (cycle ? "-on" : "")} onClick={() => setCycle(cycle ? false : true)}><i className="bi bi-arrow-repeat"></i></button>
            <button className={'ctrl-button' + (lightsQuantity == 4 ? "-on" : "")} onClick={() => setPurple(lightsQuantity == 4? 3 : 4)}><i className="bi bi-plus-lg"></i></button>
        </div>)

}

export default TrafficLigth


