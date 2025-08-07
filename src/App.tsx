import { useState, lazy } from 'react'
import { Route, Routes } from 'react-router'
import Header from './common/layout/Header'

const MaviProject = lazy(() => import('@/pages/works/mavi/MaviProject.tsx'))

export default function App() {

  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/works">
          <Route path="mavi-project" element={<MaviProject />} />
        </Route>
      </Route>
    </Routes>
  );
}
