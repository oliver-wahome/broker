import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardMenu from '../components/DashboardMenu';
import '../pageStyles/Dashboard.css';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState({
        icon: '',
        text: '',
        temp: 0
    });

    let navigate = useNavigate();

    useEffect(() => {

        const auth = getAuth();
        //checking if the user is logged. If so, getting their userId
        onAuthStateChanged(auth, async (user) => {
            if(user){
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
                        })
                        .catch(error => {
                            console.log(error.message);
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
                        })
                        .catch((error) => {
                            console.log(error.message);
                        })
                    
                    fetchWeather();
                }

                fetchLocation();
            }
            else {
                console.log("user is not logged in");
                navigate("/register");
            }
        });

    }, [navigate]);

    return (
        <div className="dashboardPage">

            <DashboardNavbar />

            <div className="dashboardPageContent">
                <DashboardMenu />
                <div className="dashboardBody">

                    <h1>Dashboard Page</h1>

                    <p>{city}</p>
                    <img src={weather.icon} alt="weather-api-icon" height="50px" width="50px" />
                    <p>{weather.temp}&deg;C and {weather.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;