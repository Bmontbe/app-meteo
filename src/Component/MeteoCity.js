import React from 'react';


const MeteoCity = props => (
  <div className='card m-4' style={{ width: '22rem'}}>
  <div className="card-body">
      <p>{props.date}</p>
      <img src={props.icon} alt ="temps"/>
      <p>{props.shortPhrase}</p>
      <p>Température Maximum : {props.tempMax} {props.unit}</p>
      <p>Température Minimum : {props.tempMin} {props.unit}</p>
      <hr></hr>  
  </div>
  </div>
);

export default MeteoCity;