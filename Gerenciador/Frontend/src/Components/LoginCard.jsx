import React from 'react'
import LoginLeftCard from './LoginLeftCard'
import LoginRightCard from './LoginRightCard'

const LoginCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">

    <div className=" bg-white h-[550px] w-[850px] rounded-[30px] flex flex-row justify-around overflow-auto">
        <LoginLeftCard/>
        <LoginRightCard/>
    </div>
    </div>
  )
}

export default LoginCard