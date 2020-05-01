import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import './style.css'

function ContactCard(){
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src={require('./smile.jpeg')} alt="Card image cap" />
        <CardBody>
        <CardSubtitle>Will Coan</CardSubtitle>
        <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Phone: 440-539-7553<br /> Email: Wcoan300@gmail.com</CardText>
         
          <div className="tags">
            <a className="link aTag" href="https://www.linkedin.com/in/will-coan-b65613133/" target='blank'><i class="fa fa-linkedin"></i></a>
            <a className="git aTag"href="https://github.com/clueking1" target='blank'><i class="fa fa-github"></i></a>
          </div>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default ContactCard;