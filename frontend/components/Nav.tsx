"use client";
import { useAuth } from "@/context/AuthContext";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Nav() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const input = useRef<HTMLInputElement>(null);

  function searchItem() {
    const itemName = input.current?.value;
    console.log("Searching for:", itemName);
  }

  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="px-3">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="flex items-center w-full max-w-4xl mx-auto gap-3">
        <input
          type="text"
          ref={input}
          placeholder="Search products..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
        <button
          onClick={searchItem}
          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
      <div className="flex gap-4 ml-6">
        <Link href="/cart">
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </Link>
        {!isLoggedIn ? (
          <Link href="/login">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition">
              Login
            </button>
          </Link>
        ) : (
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition"
            onClick={() => {
              localStorage.removeItem("access_token");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
