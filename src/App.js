import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Search from "./components/Search"
import CompanySearchResults from "./components/CompanySearchResults"
import Favourites from "./components/Favourites"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/:companyName" element={<CompanySearchResults />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
