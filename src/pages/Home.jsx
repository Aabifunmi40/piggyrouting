// import React, { useState } from 'react'
import React from "react"
import woman from "../../src/assets/woman.svg.avif"
import Button from '../reuseable/Button'
import { LuNotebook } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import { SlLock } from "react-icons/sl";
import SavingsCard from "../reuseable/SavingsCard";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";





const Home = () => {
  


  return (
    <div className=" min-h-[85vh]  ">
      <div className=" max-w-[1280px] h-full px-16 mx-auto flex justify-between  items-center pt-[120px] max-tablet:flex-col">
        <section className=" max-w-[450px] max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:max-w-[600px] max-tablet:mb-6 ">
          <main className=" flex w-[350px] h-11 bg-blue-400 text-white items-center justify-center rounded-full font-semibold mb-6  ">
            <LuNotebook />
            <span>The 2024 PiggyVest Savings Report</span>
            <MdKeyboardArrowRight />
          </main>
          <h1 className=" font-bold text-[42px] leading-12 mb-6">
            The Better Way to Save & Invest
          </h1>
          <p className=" text-lg mb-5">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <main className=" flex gap-3">
            <Button
              title="Get on iPhone"
              bgColor="#122231"
              textColor="#fff"
              iconTitle={<FaApple />}
            />
            <Button
              title="Get on Android"
              bgColor="#122231"
              textColor="#fff"
              iconTitle={<FaGooglePlay />}
            />
          </main>
        </section>
        <section className=" max-w-[600px]">
          <img className=" w-full" src={woman} alt="" />
        </section>
      </div>
      <section className="flex my-10 px-10 py-8" >
        <div>
          {<SlLock  className="w-20 " /> }
        </div>
        <div className="">
          <h1 className="font-bold text-[30px]">Your security is our priority</h1>
          <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL <br/> 
          security encryption to ensure that your
           information is completely protected from fraud.
            </p>
          <h4 className="flex font-bold">
            <BsArrowReturnRight className="" />
            More on our security measures
          </h4>
        </div>
      </section>
      <next className="text-center ">
        <h1 className="font-bold text-6xl my-2">Many ways to build your savings</h1>
        <p className="text-3xl ">Earn 12%-20% when you save with any
           of these Piggyvest plans.</p>
      </next>
      <section className="">
        <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full h-[80vh]">
        {/* Automated Savings Box */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Automated Savings</h2>
          <p className="text-gray-700 mb-6">
            Build a dedicated savings faster on your terms, automatically or manually.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline ">Piggybank</a>
        </div>

        {/* Fixed Savings Box */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Fixed Savings</h2>
          <p className="text-gray-700 mb-6">
            Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">Safelock</a>
        </div>
      </div>
    </div>
    <typesSaving>
        <div className=" flex justify-center gap-6 p-6 bg-gray-100 min-h-screen">
      <SavingsCard
        title="Goals-oriented Savings"
        description="Reach all your savings goals faster.Save towards multiple goals
        on your own with a group."
        linkText="Goals-oriented Savings"
        onClick={'handleClick'}
        icon = {<MdOutlineSubdirectoryArrowRight />}
        
        />
      <SavingsCard
        title="Flex Naira"
        description="Save, transfer, organise and withdraw your money at any time "
        linkText ="Flex Naira"
        onClick={'handleClick'}
        icon={<MdOutlineSubdirectoryArrowRight />}
         
      />
      
    </div>
      </typesSaving>
      <typesSaving>
        <div className="flex justify-center gap-6 p-6 bg-gray-100 min-h-screen">
      <SavingsCard
        title="Flex Dollar"
        description="Save and grow your money in foreign currenies such as Dollars."
        linkText="Flex Dollar"
        onClick={'handleClick'}
        icon = {<MdOutlineSubdirectoryArrowRight />}
        
        />
      <SavingsCard
        title="House Rent"
        description="Plan your rent and household expenses"
        linkText ="House Rent"
        onClick={'handleClick'}
        icon={<MdOutlineSubdirectoryArrowRight />}
         
      />
      
    </div>
      </typesSaving>


      </section >
      <section className=" bg-white  h-[120vh]">
        <main className=" ">
        <div className=" text-center ">
          <h1 className="font-bold  text-5xl ">Diverse ways to Invest</h1>
        <p className="text-2xl ">Grow your money and invest for your future confidently.
        </p>
        </div>
        <div className="bg-purple-800 h-[70vh] rounded-4xl mx-10">
          <h1></h1>

        </div>

      </main>
      </section>
      
    </div>
  )
}

export default Home