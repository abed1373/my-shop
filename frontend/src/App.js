
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProducrScreen'

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">myShop</Link>
      </header>
      <Routes >
        <Route path='/product/:slug' element={<ProductScreen/>}/>
        <Route path='/' element={<HomeScreen/>}/>
      </Routes>
      <main>
      
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App
