"use client";
import { useSearchParams } from "next/navigation";

export default function App() {
  const params = useSearchParams();
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      {params.get("name")}
    </div>
  );
}
