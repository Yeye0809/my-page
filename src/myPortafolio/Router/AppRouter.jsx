
import { Navigate, Routes, Route } from 'react-router-dom';
import { Home, Proyects, Skills } from '../components/pages';



export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="skills" element={ <Skills /> } />
        <Route path="proyects" element={ <Proyects /> } /> 

        <Route path='/*' element={ <Navigate to="/" /> } />

    </Routes>
  )
}
