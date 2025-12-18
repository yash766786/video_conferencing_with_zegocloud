import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// lazy loader
const Home = lazy(() => import("./pages/Home"))
const Room = lazy(() => import("./pages/Room"))

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </div>
  )
}

export default App
