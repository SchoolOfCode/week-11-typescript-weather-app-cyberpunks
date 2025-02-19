import './App.css'
import Header from './components/Header/Header'
import SearchbarContainer from './components/SearchbarContainer/SearchbarContainer'
import WeatherCardContainer from './components/WeatherCardContainer/WeatherCardContainer'
import Footer from './components/Footer/Footer'

function App() {
 
  return (
    <>
     <Header />
     <SearchbarContainer/>
    <WeatherCardContainer/>
     <Footer/>
    </>
  )
}

export default App
