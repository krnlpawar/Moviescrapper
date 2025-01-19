import { Route, Routes } from 'react-router'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import MovieList from './pages/MovieList'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movies" element={<MovieList />} />

        {/* <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>
    </>
  )
}

export default App
