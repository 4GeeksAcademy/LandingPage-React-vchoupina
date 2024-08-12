import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	  <div>
		<Navbar />
		<Jumbotron />
		<div className="container">
		  <div className="row">
			<div className="col-md-4">
			  <Card
				title="Card title 1"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				imageUrl="https://via.placeholder.com/500x325"
				buttonUrl="#"
				buttonText="Find Out More!"
			  />
			</div>
			<div className="col-md-4">
			  <Card
				title="Card title 2"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				imageUrl="https://via.placeholder.com/500x325"
				buttonUrl="#"
				buttonText="Find Out More!"
			  />
			</div>
			<div className="col-md-4">
			  <Card
				title="Card title 3"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				imageUrl="https://via.placeholder.com/500x325"
				buttonUrl="#"
				buttonText="Find Out More!"
			  />
			</div>
		  </div>
		</div>
		<Footer />
	  </div>
	);
  };
  
  export default Home;
