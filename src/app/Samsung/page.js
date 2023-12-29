<<<<<<< HEAD
"use client";

import { useRouter } from "next/navigation";
import { DataSamsung } from "../components/Data";
import Image from "next/image";
export default function Samsung() {
  const router = useRouter();
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center overflow-x-hidden items-center">
      <div className="flex-wrap  flex gap-[10px] justify-center">
        {DataSamsung.map((element, index) => {
          return (
            <div
              onClick={() => {
                router.push("/phone?name=" + element.path);
              }}
              key={index}
              className="flex"
            >
              <div className="flex flex-col text-center">
                <Image
                  height={190}
                  width={150}
                  alt="phone image"
                  src={element.path}
                ></Image>
                <h1>{element.name}</h1>
              </div>
=======
import { Data1 } from "../components/Data1";
import Image from "next/image";
//100% tailwind ashiglare
export default function Home(Name) {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center overflow-x-hidden">
      <div className="flex-wrap  flex gap-[10px] justify-center">
        {Data1.map((element, index) => {
          return (
            <div
              key={index}
              className="w-[15%] max-[600px]:w-[30%] max-[700px]:w-[40%] max-[600px]:h-[auto] max-[700px]:h-[40%] h-[auto] text-center flex-col "
            >
              <div className="w-[100%] h-[90%] relative">
                <Image
                  sizes="100vh"
                  fill
                  alt="phone image"
                  src={element.path}
                ></Image>
              </div>
              {/* Image compoenet htmliin img tagaas hmq udaan ucraas soliv */}
              <h1>{element.name}</h1>
              <h1>{element.medeelel}</h1>
              <h1>{element.price}</h1>
>>>>>>> f663121bfef767204bd37843154981dc88d57d03
            </div>
          );
        })}
      </div>
    </div>
  );
}
