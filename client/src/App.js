import './App.css';
import IndexPage from './pages/IndexPage/IndexPage'
import CoastersPage from './pages/CoastersPage/CoastersPage'
import CoastersDetails from './pages/CoastersDetails/CoastersDetails'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path='/galeria' element={<CoastersPage/>} />
        <Route path='/WE' element={<CoastersDetails/>} />
      </Routes>

    </div>
  )
}

export default App;
