import React from "react";
import ReactDOM from "react-dom";
import "../../styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-solid-svg-icons'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const SecondsCounter = (props) => {
    // setInterval(function, milliseconds, param1, param2, ...)   ####This is the syntax of setInterval()


    return(
        <div className="main_container d-flex">
            <h1 className="text-center mt-3 mb-4">My React Simple Counter</h1>		
            <p>This web app counts how many seconds have passed since the page loaded.</p>		        
            <div className="d-flex counter_container">
                <div className="d-flex clock digit"><FontAwesomeIcon icon={faClock}  style={{color:"#5eb1d4"}} /></div>
                <div className="sixth digit">{props.digitSix % 10}</div>
                <div className="fifth digit">{props.digitFive % 10}</div>
                <div className="fourth digit">{props.digitFour % 10}</div>
                <div className="third digit">{props.digitThree % 10}</div>
                <div className="second digit">{props.digitTwo % 10}</div>
                <div className="first digit">{props.digitOne % 10}</div>
            </div>
        </div>
    )
}

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000)
    const five = Math.floor(counter/10000)
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)
    console.log(one,two,three,four,five,six);
    counter++;
    ReactDOM.render(
        <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app")
    );
}, 1000)


export default SecondsCounter;