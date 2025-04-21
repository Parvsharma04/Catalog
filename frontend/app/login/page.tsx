
export default function Login() {
  return (
    <main className="container mx-auto px-4 py-8 flex justify-center h-full items-center">
      <div className="border-black border-1 bg-gray-200 ">
      <div className="p-5">
        <label>
          Username:
        </label>
        <input type="text" placeholder="ooga booga" className="rounded p-5 border-black border-1 m-3" required/>
      </div>
      <div className="p-5">
        <label>
          Password:
        </label>
        <input type="password" className="rounded p-5 border-black border-1 m-3" required/>
      </div>
      <div className="p-5">
        <button>Submit</button>
      </div>
      </div>
    </main>
  )
}
