import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Desc from '../Pages/Desc'
import LabDetails from '../Pages/Labdetails/LabDetails'
import OrderMedicines from '../Pages/OrderMedicines'


const Mainroutes = () => {
  return (
    <div>
     
      <Routes>
        <Route path="productdetails" element={<Desc/>}/>
        <Route path="med" element = { <OrderMedicines/>}/>
        {/* <Route path='/labdetails' element={<LabDetails/>}/> */}
      </Routes>
     
    </div>
  )
}

export default Mainroutes
