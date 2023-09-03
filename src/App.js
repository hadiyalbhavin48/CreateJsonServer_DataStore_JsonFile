import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JsonList from './JsonData/JsonList'
import './style.css'
import JsonCreate from './JsonData/JsonCreate'
import JsonDetails from './JsonData/JsonDetails'
import JsonEdit from './JsonData/JsonEdit'
const App = () => {
  return (
    <div>
      <h1 className='text-center'>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<JsonList />} />
          <Route path='/json/create' element={<JsonCreate />} />
          <Route path='/json/details/:jsonid' element={<JsonDetails />} />
          <Route path='/json/edit/:jsonid' element={<JsonEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

