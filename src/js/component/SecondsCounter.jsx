import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-solid-svg-icons'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const SecondsCounter = () => {
    // setInterval(function, milliseconds, param1, param2, ...)   ####This is the syntax of setInterval()


    return(
        <div className="d-flex counter_container">
				<div className="d-flex clock digit"><FontAwesomeIcon icon={faClock}  style={{color:"#5eb1d4"}} /></div>
				<div className="sixth digit">0</div>
				<div className="fifth digit">0</div>
				<div className="fourth digit">0</div>
				<div className="third digit">0</div>
				<div className="second digit">0</div>
				<div className="first digit">0</div>
			</div>
    )
}


export default SecondsCounter;