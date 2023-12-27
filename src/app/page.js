"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { useState } from "react"
//ehleed git add .
//drn git commit -m "yu oorcilsno bicih"
// git push
//shin ym nemegdsn gdgiig avh git pull
export default function Home() {
  const router = useRouter();
  return (
    <div className="bigContainer">
      <div>
        <div>
          <button onClick={() => router.push("/Iphone")}>Iphone</button>
        </div>
        <div>
          <button onClick={() => router.push("/Samsung")}>Samsung</button>
        </div>
        <div>
          <button onClick={() => router.push("/redmi")}>Redmi</button>
        </div>
      </div>
    </div>
  );
}
