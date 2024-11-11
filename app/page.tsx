
import React from "react"
import Header from "@/Components/Header/Header"

import Image from "next/image"

const Home=()=>{
  return(
    <div className="h-screen">
      
      <Header/>
     
      
      <div className="flex h-[50%]">
        <div className="w-1/2 flex flex-col  items-start m-12 pt-36 pl-32 gap-y-8">
                <h1 className="w-[496px] h-[189px] font-rye text-4xl font-bold  leading-[65.8px] ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                <p className="w-[902px] h-[147px] font-rye  text-3xl font-medium letter-spacing: 0.100em  text-left  text-[#787054]">An example of intricate workmanship and detail, elegant
                   necklaces and long and short chains form a part of our 
                   desirable collection.</p>
                <button className="w-72 h-[58px] rounded-md bg-[#A29875] text-[#FFFFFF] font-rye font-medium text-3xl ">Explore Now</button>
            </div>
            <div className="flex flex-row ">
              <Image src={"/image/newimage.png" }
              alt="jewellery picture"
              width={490} height={667} 
              className=" pt-24  " 
             
              /> 
            </div>
            
        </div>
    </div>

  )
}
export default Home