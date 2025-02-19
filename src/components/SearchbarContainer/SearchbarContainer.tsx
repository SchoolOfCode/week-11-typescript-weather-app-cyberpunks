import { useState } from "react"

import Searchbar from "../Searchbar/Searchbar"
import SearchbarButton from "../SearchbarButton.tsx/SearchbarButton"

interface Weather {
    temperature?: string
}

const [weather, setWeather] = useState<Weather>()

const SearchbarContainer = () => {
  return (
    <div>SearchbarContainer
    <Searchbar/>
    <SearchbarButton/>
    </div>
  )
}

export default SearchbarContainer