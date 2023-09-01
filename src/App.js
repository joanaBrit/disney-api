import { useEffect } from 'react'
import axios from 'axios'
import Home from './components/Home'
import CharactersInfo from './components/CharactersInfo'
import CharactersList from './components/CharactersList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/character') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <BrowserRouter>
  <main>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/charactersList' element={<CharactersList/>} />
  <Route path='/charactersInfo' element={<CharactersInfo/>} />
  </Routes>
  </main>
  </BrowserRouter>
  )
}

export default App