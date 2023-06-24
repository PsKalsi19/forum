
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PrimaryLayout from './layout/PrimaryLayout'
import Home from './pages/home/Home'
import Post from './pages/post/Post'

function App() {

  return (
    <>
       <Routes>
        <Route
          path="/"
          element={
              <PrimaryLayout />
          }
        >
          <Route index element={<Home />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
