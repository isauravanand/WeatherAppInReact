import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import "./InfoBox.css";

export default function InfoBox({ info }) {


    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL ="https://unsplash.com/photos/person-wearing-jacket-and-backpack-9GBwZrbT0QU";
    const RAINY_URL = "https://unsplash.com/photos/three-people-using-umbrella-walking-in-the-street-yDOzSz7YcYE";
    return (

        <div className="InfoBox">
            <br /><br /><br />
            <div className="cardContainer">
                <Card sx={{ width: 400 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;
                            {info.humidity > 80 ?< ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Tempreature = {info.temp} &deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Max-Temperature = {info.tempMax}</p>
                            <p>Min-Temperature = {info.tempMin}</p>
                            <p>Weather = {info.weather}</p>
                            <p>Feels Like = {info.feelsLike}</p>
                        </Typography>


                    </CardContent>
                </Card>
            </div>
        </div>
    )
}