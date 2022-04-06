import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search'
import CompanySearchResults from './components/CompanySearchResults'
import FavoriteResults from './components/FavoriteResults'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/:favorites" element={<FavoriteResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
