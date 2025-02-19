

async function getWeather() {
    const url = "https://open-meteo.com/en/docs#hourly=temperature_2m"
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json()
        console.log(json);
    } catch (error: unknown)  {
         if (error instanceof Error) {
        console.log(error.message);
        
    } else {
        console.error(String(error))}
    }
    
}

export default function SearchbarButton(searchInput: string) {
    return <button onClick={() => getWeather()}>Submit</button>
}