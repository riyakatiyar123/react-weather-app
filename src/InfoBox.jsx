import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"; 
import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {
  const imageurl =
    "https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?w=900&auto=format&fit=crop&q=60";

   const HOT_URL="";
    const COLD_URL="";
    const RAIN_URL="";

  
  return (
    <div>

      <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
        <CardMedia
          component="img"
          height="200"
          image={imageurl}
          alt="Weather"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <strong>Temperature:</strong> {info.temp} K
            <br />
            <strong>Feels Like:</strong> {info.feelslike} K
            <br />
            <strong>Humidity:</strong> {info.humidity}%
            <br />
            <strong>Max Temp:</strong> {info.tempmax} K
            <br />
            <strong>Min Temp:</strong> {info.tempmin} K
            <br />
            <strong>Condition:</strong> {info.weather}
          </Typography>
        </CardContent>

        
      </Card>
    </div>
  );
}
