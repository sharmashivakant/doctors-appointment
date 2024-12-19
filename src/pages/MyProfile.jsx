import React, { useState } from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {


  const [userData,setUserData] = useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:'richardjemaswap@gmail.com',
    phone:'(415) 666-0135',
    address:{
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    },
    gender:'male',
    dob:'1990-07-15',
    occupation:'Doctor',
    education:'MBBS, PhD'
  })

  const [isEdit,setIsEdit] = useState(true)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit?
        <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 ' type="text" value={userData.name} onChange={e=>setUserData(prev =>({...prev,name:e.target.value}))} />
        :<p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
             isEdit?
             <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e=>setUserData(prev =>({...prev,phone:e.target.value}))} />
             :<p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit?
            <>
              <input className='bg-gray-50' type="text" value={userData.address.line1} onChange={e=>setUserData(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))} />
              <br />
              <input className='bg-gray-50' type="text" value={userData.address.line2} onChange={e=>setUserData(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))} />
            </>
            :<p className='text-gray-500'>{userData.address.line1},<br /> {userData.address.line2}</p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'>Gender:</p>
          {
            isEdit?
            <select className='max-w-20 bg-gray-100' value={userData.gender} onChange={e=>setUserData(prev =>({...prev,gender:e.target.value}))}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            :<p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit?
            <input className='max-w-28 bg-gray-100' type="date" value={userData.dob} onChange={e=>setUserData(prev =>({...prev,dob:e.target.value}))} />
            :<p className='text-gray-400'>{new Date(userData.dob).toLocaleDateString()}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit?
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save information</button>
          :<button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile