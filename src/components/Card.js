import React from "react";
import App from "../App";
import './Card.css'
import Home from "./Home";

function CardContent(props) {
    return (
      <div className="styleCardContent">
        <p className="styleCardTitle">{props.title}</p>
        <p className="styleLocationLabel">{props.location}</p>
        <p className="styleDescription">{props.description}</p>
        <a href={props.link}>
            <button className="btn2" >Read More</button>
        </a>
      </div>
    );
  }
  
  export default class Card extends React.Component {
    render() {
      return (
        
          <div className="styleCard">
            {/*<CardImage image={this.props.image} width={this.props.width} />*/}
            <CardContent
              title={this.props.title}
              location={this.props.location}
              description={this.props.description}
              link={this.props.link}
            />
          </div>
        
      );
    }
  }


  Card.defaultProps = {
    title: "Template - Card Title",
    location: "Location label",
    description: "Template description textbox"
  };




