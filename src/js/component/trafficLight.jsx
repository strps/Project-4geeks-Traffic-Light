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

    const colors = ["red", "yellow", "green", "purple"]

    return (
        <div className="traffic-light">
            {colors.slice(0, lightsQuantity).map((e, i)=><button className={"light "+ e + ((lightOn == i) ? "-on" : "")} onClick={() => setLightOn(i)}></button>)}
            <button className={'ctrl-button' + (cycle ? "-on" : "")} onClick={() => setCycle(cycle ? false : true)}><i className="bi bi-arrow-repeat"></i></button>
            <button className={'ctrl-button' + (lightsQuantity == 4 ? "-on" : "")} onClick={() => setPurple(lightsQuantity == 4? 3 : 4)}><i className="bi bi-plus-lg"></i></button>
        </div>)

}

export default TrafficLigth