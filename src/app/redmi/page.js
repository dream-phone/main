import { Data2 } from "../components/Data2";
import Image from "next/image";
//100% tailwind ashiglare
export default function Home(Name) {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center overflow-x-hidden">
      <div className="flex-wrap  flex gap-[10px] justify-center">
        {Data2.map((element, index) => {
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
