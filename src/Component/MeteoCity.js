import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './MeteoCity.css';


const MeteoCity = props => (
<div>
  <Card className="cardMeteo">
    <Card.Header className="date">{props.date}</Card.Header>
    <hr/>
      <Image className="image" src={props.icon} alt ="temps" />
      <Card.Content className="infos">
        <Card.Description className="description">
        {props.shortPhrase}
        <hr/>
        Température Maximum : {props.tempMax} {props.unit}
        <br/>Température Minimum : {props.tempMin} {props.unit}
        </Card.Description>
      </Card.Content>
  </Card>
</div>
);

export default MeteoCity;