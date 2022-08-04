import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageNavBar from './components/PageNavBar'
import CategoryIndex from './components/CategoryIndex'
import NotFound from './components/NotFound'
import RandomPage from './components/RandomPage'
import RecipeSingle from './components/RecipeSingle'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/" element={<CategoryIndex />} />
          <Route path="/RandomPage" element={<RandomPage />} />
          <Route path="/RecipeSingle" element={<RecipeSingle />} />
          <Route path="/" element={<CategoryIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
