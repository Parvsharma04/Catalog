"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Login() {
  const router = useRouter();
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/signin", {
        email: username.current?.value,
        password: password.current?.value,
      });
      localStorage.setItem("access_token", res.data);
      router.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Login to Your Account
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="ooga booga"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              ref={username}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              ref={password}
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href={"/signup"} className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
