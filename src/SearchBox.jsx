import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let[city,setCity]=useState("");
    let [error,setError] =useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () =>{
        try{

            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            let result = {
                city:city,
                temp:jsonResponce.main.temp,
                tempMin:jsonResponce.main.temp_min,
                tempMax:jsonResponce.main.temp_max,
                humidity:jsonResponce.main.humidity,
                feelsLike:jsonResponce.main.feels_like,
                weather:jsonResponce.weather[0].description
            };
            // console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        try{

            event.preventDefault();
            setCity("")
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo)
        }catch(e){
            setError("No such place")
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/> <br /><br />
                <Button variant="contained" type='submit'>Search </Button>
                <p>{error&& <Alert severity="error" variant="filled" >No Such Place Exists! </Alert>}</p>
            </form>
        </div>
    )
}