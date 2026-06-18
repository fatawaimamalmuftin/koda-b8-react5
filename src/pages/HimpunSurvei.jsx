import { useEffect, useState } from "react"

export default function HimpunSurvei() {

    const [data, setData] = useState([])

    useEffect(() => {
        const getDataLocal = JSON.parse(window.localStorage.getItem("DataPerokok") || "[]")
        setData(getDataLocal)
    }, [])

    return (
        <>
            <main className=" font-sans flex flex-col gap-5 w-screen h-screen bg-purple-200 text-black px-55 py-10">
                <section className="border-t-15 bg-white rounded-2xl border-t-purple-600 px-5 py-8 flex flex-col justify-center gap-10">
                    <h1 className="flex justify-center items-center text-shadow-black text-5xl">Hasil Seluruh data</h1>
                    <div>
                        <div className="grid grid-cols-6">
                            <div className="flex justify-center items-center font-bold border py-2">Nama</div>
                            <div className="flex justify-center items-center font-bold border py-2">Umur</div>
                            <div className="flex justify-center items-center font-bold border py-2">L/P</div>
                            <div className="flex justify-center items-center font-bold border py-2">Perokok Y/N</div>
                            <div className="grid col-span-2 justify-center items-center font-bold border py-2">Jenis rokok</div>
                        </div>
                        {data.length === 0 && (
                            <div className="text-center py-4 border text-gray-500 bg-gray-50">Belum ada data</div>
                        )}
                        {data.map((item, index) => (
                            <div key={index} className="grid grid-cols-6 hover:bg-purple-50 transition-colors">
                                <div className="flex justify-center items-center border px-1 py-2">{item.name || "-"}</div>
                                <div className="flex justify-center items-center border px-1 py-2">{item.age || "-"}</div>
                                <div className="flex justify-center items-center border px-1 py-2">{item.jenisKelamin || "-"}</div>
                                <div className="flex justify-center items-center border px-1 py-2">{item.doUsmoke === "y" ? "Yes" : "No"}</div>
                                <div className="grid col-span-2 justify-center items-center border px-1 py-2">
                                    {Array.isArray(item.cigaratte) ? item.cigaratte.join(", ") : item.cigaratte || "-"}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main >
        </>
    )
}