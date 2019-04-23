import React, { Component } from 'react';
import MeteoCity from './MeteoCity';
import moment from 'moment';
import 'moment/locale/fr';
import { Button } from 'semantic-ui-react';
import './Geolocation.css';

moment.locale('fr');

class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 47.2982100,
      longitude: -1.4902400,
      error: null,
      city: null,
      country: null,
      key: null,
      temperatures: null,
    };
    this.getMeteo();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }



  getMeteo = () => {
    const apikey = "lqc5YsaqTc9SMsbXcIAojsUMh8yMDKwB"
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=%20%09${apikey}%20&q=${this.state.latitude}%2C${this.state.longitude}&language=fr&details=true&toplevel=true`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: data.LocalizedName,
          country: data.Country.LocalizedName,
          key: data.Key,
        });
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.state.key}?apikey=${apikey}&language=fr&details=true&metric=true`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              temperatures: data.DailyForecasts,
            })

          });

      })
  }

  getSearch = () => {

  }

  render() {
    return (
      <div className='background'>
      <div>
        <p className="cityBase">{this.state.city}, {this.state.country}</p>
        <Button secondary className="button" onClick={() => this.getMeteo()}>Me géolocaliser</Button>
      </div>
      <br/>
      <div className="mb-4">
        <div className="row justify-content-center">
          {this.state.temperatures ? this.state.temperatures.map((weather) => (
            <MeteoCity
              date={moment(weather.Date).format("dddd Do MMMM YYYY")}
              icon={`https://vortex.accuweather.com/adc2010/images/slate/icons/${weather.Day.Icon}.svg`}
              shortPhrase={weather.Day.ShortPhrase}
              tempMax={weather.Temperature.Maximum.Value}
              unit={weather.Temperature.Maximum.Unit}
              tempMin={weather.Temperature.Minimum.Value}
            />
          )) : ""}
        </div>
      </div>
    </div>
    );
  }
}

export default Geolocation;