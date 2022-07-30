import { Navbar } from '../../ui';
import {MarvelPage, DCPage, SearchPage, HeroePage} from '../../heroes'
import { Navigate, Route, Routes } from 'react-router-dom';



export const HereosRoutes = () => {
  return (
    <>
        <Navbar />

            <div className='container' >
                <Routes>
                  
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />

                    <Route path="buscar" element={<SearchPage />} />
                    <Route path="heroe/:id" element={<HeroePage />} />
                    


          

                </Routes>
            </div>
    </>
  )
}
