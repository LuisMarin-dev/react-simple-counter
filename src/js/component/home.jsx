{/* <script src="https://kit.fontawesome.com/4efe8fbff7.js" crossorigin="anonymous"></script> */}
import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";







//create your first component
const Home = () => {

	// const[seconds, setSeconds] = useState(0);
	// const[minutes, setMinutes] = useState(0);
	
	// const simpleCounter = (props) => {
	// 	console.log ("Hello World");
	// }
	// simpleCounter();
	return (
		<div className="text-center d-flex main_div">
			<h1 className="text-center mt-3 mb-4">My React Simple Counter</h1>				
			<SecondsCounter />			
			{/* <div className="commentthebasictemplatecode">
				 <p>
				<img src={rigoImage} />
				</p> 
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
				<p>
					Made by
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
					love!!
				</p> 
			</div> */}
		</div>
	);
};

export default Home;
