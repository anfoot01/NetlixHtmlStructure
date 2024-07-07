import Header from "./components/Header"
import Footer from "./components/Footer"
import Genre from "./components/Genre"
import FilmDesc from "./components/FilmDesc"
import Rating from "./components/Rating"
import ButtonBlock from "./components/ButtonBlock"
import Popular from "./components/Popular"
import AgeMark from "./components/AgeMark"
function App() {
  return (
    <>
     <Header></Header>
     <div className="main-content">
      <Genre></Genre>
      <FilmDesc></FilmDesc>
      <Rating></Rating>
      <ButtonBlock></ButtonBlock>
      <Popular></Popular>
     </div>
     <AgeMark></AgeMark>
     {/* <Footer></Footer> */}
    </>
  )
}

export default App
