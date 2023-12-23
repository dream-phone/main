"use client";

import { useRouter } from "next/navigation";
import { DataRedmi } from "../components/Data";
import Image from "next/image";
export default function Samsung() {
  const router = useRouter();
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center overflow-x-hidden items-center">
      <div className="flex-wrap  flex gap-[10px] justify-center">
        {DataRedmi.map((element, index) => {
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
