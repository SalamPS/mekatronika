'use client'

export default function Home() {
  const setTirai = (action) => {
    fetch(`/api/smarthome?action=${action}`)
    .then(res => {console.log(res); return res})
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return (
    <div className="h-[100vh] flex flex-col gap-4 justify-center items-center bg-[#ddd]">
      <h1 className="text-black text-3xl font-bold">Smart Tirai Mekatronika</h1>
      <div className="">
        <button className="px-4 py-2 bg-cyan-400 rounded-xl mr-3"
          onClick={() => {setTirai('naik')}}>
          Buka Tirai
        </button>
        <button className="px-4 py-2 bg-cyan-400 rounded-xl ml-3"
          onClick={() => {setTirai('turun')}}>
          Tutup Tirai
        </button>
      </div>
    </div>
  );
}
