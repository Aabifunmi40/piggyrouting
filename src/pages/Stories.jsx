import React from 'react'
import love from "../../public/Piggyvest Stories™ - PiggyVest/love.jpeg"
import side from "../../public/Piggyvest Stories™ - PiggyVest/sidepic.jpeg"
import Button from "../../src/reuseable/Button"
import girl from "../../public/Piggyvest Stories™ - PiggyVest/girl.png"
import white from "../../public/Piggyvest Stories™ - PiggyVest/whiteAppleLogo 1.svg"
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Stories = () => {
  return (
    <div className='  '>
      <main className='flex'>
        <section className='px-6 py-7 '>
        <h1 className='text-4xl flex'>Loved by our Customers <img src={love}></img></h1>
        <p className=''>Stories of happy savers who Piggyvest has helped or
             is helping save for what truly matters to them.
        </p>
            

        <Button title="Addyourstory"bgColor="#122231"
            textColor="#fff" />
          
        </section>
        <section>
          <img src={side} width={"600px"}/>

        </section>
      </main>
      <section className='flex my-70'>
         <img src={girl } width={"450px"} className=''></img>
        
        <div className=' p-20'>
          <h1 className='text-5xl my-10' >Join 5+ million people who save and invest with us</h1>
          <div className='flex gap-3'>
            <Button title="GetoniPhone"bgColor="#ffff"
            textColor="black"   borderColor= "black"
            iconTitle={<IoLogoApple />}
             /> 
          
            

           <Button 
           title="GetoniAndriod"
           bgColor="#ffff"
            textColor="black" 
            borderColor="black" 
            iconTitle={<IoLogoGooglePlaystore />}
            />

            
          </div>
            
        </div>
    
      </section>
        
    
      
    
        
    </div>
  )
}

export default Stories