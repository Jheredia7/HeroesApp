import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { HereosRoutes } from '../heroes/routes/HereosRoutes';






export const AppRouter = () => {
  return (
    <>
   
    
      <Routes>
            

            <Route path="login" element={<LoginPage />} />

            <Route path="/*" element={<HereosRoutes />} />
            


      </Routes>
    
    </>
  )
}
