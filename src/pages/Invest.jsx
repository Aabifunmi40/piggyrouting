import React from 'react'
import Button from '../reuseable/Button'
import first from "../../public/Invest in bits and on the go with Investify™ - PiggyVest/firstmy.jpeg"
import my from "../../public/Invest in bits and on the go with Investify™ - PiggyVest/my.jpeg" 
import woman from "../../public/Invest in bits and on the go with Investify™ - PiggyVest/woman.png"
const Invest = () => {
  return (
    <div >
        <section  className='bg-purple-500 flex text-white my-20 '>
          <main className='px-8 py-6 my-16'>
            <h1 className='text-5xl '>Invest on the go</h1>
        <button className='bg-white text-purple-400 px-2 py-1 my-4 rounded-full' >Upto35%returns</button>
        <p className='my-4 text-3xl'>Invest securely and confidently on the go.<br/>
        Up to 35% returns, 6-12 month duration.</p>

        <div className='flex gap-8 my-4'> 
          <Button  textColor="#ffff" bgColor="black"
        title= "GetoniPhone" iconTitle={"white"} />
        <Button  textColor="#ffff" bgColor="black"
        title= "GetonAndriod" iconTitle={"white"} />
        </div>
          </main>
          <div>
            {/* <img src={first} width={"450px"} className='mx-100  image-back relative'/> */}
            <img  src={my} width={"500px"} className='mx-20' />
          </div>
        </section>
        <hero>
          <h1 className='text-#122231 text-5xl text-center   '> Simple investments with great returns</h1>
          <p className='text-center text-#122231 text-2xl'>Investments are made readily accessible to everyone</p>
        </hero>
        <next className="flex">
          <div className='px-18  py-16 bg-purple-700 text-white '>
            <h1 className='text-4xl'>We’ve made it easier for anyone to get started.</h1>
          <p>Finally, you can access pre-vetted low-medium risk primary and secondary investment opportunities easily with any a
            mount you have. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.</p>
          </div>
          <div>
            <img src={woman} width={"1700px"}/>
          </div>
        </next>
    </div>
  )
}

export default Invest