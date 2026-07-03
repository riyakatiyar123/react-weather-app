import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({updateinfo}){
    let[city,setCity]=useState("");
     let[error,setError]=useState(false);
 const api_url="https://api.openweathermap.org/data/2.5/weather";
 const api_key="2c865558fc309ebf164074bd2c3ade2e";

 let getweatherinfo=async()=>
 {
    try{
        let response=await fetch(`${api_url}?q=${city}&appid=${api_key}`);

  let jsonresponse=await response.json();
  console.log(jsonresponse);
  let result=
  {
    city:city,
    temp: jsonresponse.main.temp,
    tempmin : jsonresponse.main.temp_min,
    tempmax : jsonresponse.main.temp_max,
    humidity : jsonresponse.main.humidity,
    feelslike : jsonresponse.main.feels_like,
    weather : jsonresponse.weather[0].description,
};
console.log(result);
return result;
    } catch(err)
    {
       throw err;
    }
  
 };
    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
      console.log(city);
      setCity("");
      let newinfo=await getweatherinfo();
      updateinfo(newinfo);
    setCity("");
    setError(false);}
      catch(err)
      {
        setError(true);
      }
    };
    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" color="secondary"
                value={city}
                onChange={handleChange}/>
                <br></br><br></br>
                 <Button variant="contained" type="submit">
                    search
                </Button>
               {error &&<p style={{color:"red"}}>"no such place </p>}
            </form>
            
            </div>
    );
};