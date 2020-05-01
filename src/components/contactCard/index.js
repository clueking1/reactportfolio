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
          
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default ContactCard;