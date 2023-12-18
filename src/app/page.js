'use client'
import { useRouter } from "next/navigation"
import Image from 'next/image'
// import { useState } from "react"
import {useEffect} from 'react'
export default function Home(){
  const router=useRouter()
  return(
    <div className="bigContainer">
    <div>
    <button  onClick={() => router.push("/Iphone")}>Iphone</button>
    </div>
    <div>
    <button onClick={() => router.push("/Samsung")}>Samsung</button>
    </div>
    <div>
    <button>Redmi</button>
    </div>
    </div>
  )
}