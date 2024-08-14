import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card
              title="Card title 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageUrl="https://via.placeholder.com/500x325"
              buttonUrl="#"
              buttonText="Find Out More!"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card
              title="Card title 2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageUrl="https://via.placeholder.com/500x325"
              buttonUrl="#"
              buttonText="Find Out More!"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card
              title="Card title 3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageUrl="https://via.placeholder.com/500x325"
              buttonUrl="#"
              buttonText="Find Out More!"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card
              title="Card title 4"
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
