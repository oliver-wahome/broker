import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import '../pageStyles/Dashboard.css';
import axios from 'axios';

function Dashboard() {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState({
        icon: '',
        text: '',
        temp: 0
    });

    useEffect(() => {
        let weather_api_url = '';

        //function to get the weather from theweatherapi using the location fetched from geoiplookup.io
        function fetchWeather(){
            axios.get(weather_api_url)
                .then(res => {
                    const currentWeather = res.data.current;
                    setWeather({
                        icon: currentWeather.condition.icon,
                        text: currentWeather.condition.text,
                        temp: currentWeather.temp_c
                    });
                    console.log(currentWeather);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        //function to fetch location data from geoiplookup.io
        //function is async so that location is got before weather is fetched since the weather is dependent on it
        async function fetchLocation(){
            await axios.get('https://json.geoiplookup.io/')
                .then(res => {
                    const currentCity = res.data.city;
                    weather_api_url = 'http://api.weatherapi.com/v1/current.json?key=2e7f2c25ccc4417c80272145222312&q='+currentCity+'&aqi=yes';
                    setCity(currentCity);
                    console.log(res.data.city);
                })
                .catch((error) => {
                    console.log(error);
                })
            
            fetchWeather();
        }

        fetchLocation();
    }, []);

    return (
        <div className="dashboardPage">

            <DashboardNavbar />

            <div className="dashboardPageContent">
                <DashboardMenu />
                <div className="dashboardBody">

                    <h1>Dashboard Page</h1>

                    <p>{city}</p>
                    <img src={weather.icon} alt="weather-api-icon" height="40px" width="40px" />
                    <p>{weather.temp}&deg;C and {weather.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;