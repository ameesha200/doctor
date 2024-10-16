import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

const {docId} = useParams()
const {doctors} = useContext(AppContext)

const [docInfo,setDocInfo] = useState(null)

const fetchDocInfo = async () => {
  const sample = doctors.find(doc => doc._id === docId)
  console.log(sample);
  
  setDocInfo(sample)
  // console.log(docInfo)
  
}

useEffect(()=>{
 fetchDocInfo()
},[doctors,docId])

  return (
    <div>
      
    </div>
  )
}

export default Appointment



