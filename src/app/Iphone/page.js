import { Data } from "../components/Data";
import Image from "next/image";
//100% tailwind ashiglare
export default function Home(Name) {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <div className="flex-wrap justify-center flex gap-[10px]">
        {Data.map((element, index) => {
          return (
            <div key={index} className="w-[300px] h-[500px] relative">
              {/* Image compoenet htmliin img tagaas hmq udaan ucraas soliv */}
              <Image
                layout="fill"
                sizes="auto"
                alt="phone image"
                src={element.path}
              ></Image>
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
