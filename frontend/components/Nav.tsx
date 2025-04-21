"use client"
import { useRef } from "react"
import { Search, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function Nav(){
  const input = useRef("");
    
  function searchItem(){
    const itemName = input.current.value;
    console.log("searching for: ", itemName)
  }


  return (
    <div className="w-full h-fit bg-gray-300 flex justify-center">
      <input type="text" className="rounded-lg p-5 my-5 border-black border-1 w-[50%] text-xl" ref={input} />
      <button className="rounded-lg my-5 mx-3 p-5 border-black border-1 hover:bg-gray-200" onClick={searchItem}><Search /></button>
      <Link href={"/cart"}><button className="rounded-lg my-5 p-5 border-black border-1 hover:bg-gray-200"><ShoppingCart /></button></Link>
      <Link href={"/login"}><button className="rounded-lg m-5 p-5 border-black border-1 hover:bg-gray-200">Login</button></Link>
    </div>
  )
}
