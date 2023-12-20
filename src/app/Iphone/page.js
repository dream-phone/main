import { Data } from "../components/Data";

export default function Home(Name) {
  return (
    <div className="bigIphoneContainer">
      <div className="container flex-wrap flex gap-[10px]">
        {Data.map((element, index) => {
          return (
            <div key={index} className="w-[20%]">
              <img src={element.path}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
