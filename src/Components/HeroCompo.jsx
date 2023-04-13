import React from 'react'
import  Typewriter  from 'typewriter-effect'
const HeroComponents = ({heroimg,text1,text2}) => {
  return (
    <>
        <div className='h-full w-full'>
            <div className="w-full h-screen relative">
                <img src={heroimg}  alt="heroimg"  className="w-full h-full bg-cover bg-center object-cover opacity-20" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <Typewriter options={{
                  autoStart:"true",
                  loop:"true",
                  delay:40,
                  strings:["hello","i am software developer"],
                }} />
               
            </div>
        </div>
    </>
  )
}

export default HeroComponents