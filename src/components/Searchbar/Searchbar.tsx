import {useState} from "react";

const [city, setCity] = useState<string>("");

async function weatherData(city: string) {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast")
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching coordinate")
    }
}




export default function Searchbar(){
  return (
    <input placeholder="Input here"></input>
  )
}