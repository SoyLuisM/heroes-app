import React from 'react'
import { Navbar } from '../../iu'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPages, HeroPage, MarvelPages, SearchPages } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
          <Routes>
              <Route path="marvel" element={<MarvelPages/>}/>
              <Route path="DC" element={<DcPages/>}/>
              <Route path="search" element={<SearchPages/>}/>
              <Route path="hero/:heroId" element={<HeroPage/>}/>
              <Route path="/" element={<Navigate to="/marvel" />}/>
          </Routes>
        </div>
    </>
  )
}
