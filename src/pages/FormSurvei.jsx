import { useState } from "react"
import { Navigate } from "react-router"

export default function FormSurvei() {
    const [isSmoke, setIsSmoke] = useState(false)

    const [isSucces, setIsSucces] = useState(false)

    function hendleForm(event) {
        event.preventDefault()

        const DataLocal = JSON.parse(window.localStorage.getItem("DataPerokok") || "[]")

        const dataForm = new FormData(event.target)
        const getSeluruhCheck = dataForm.getAll("cigaratte")
        const formData = Object.fromEntries(dataForm.entries())
        formData.cigaratte = getSeluruhCheck

        const cekData = Object.values(formData).some(value => {
            if (typeof value === "string") return value.trim() === ""
            return false
        })

        if (cekData) {
            return alert("Mohon isi form dengan mengikuti instruksi !!");
        }

        if (isSmoke && getSeluruhCheck.length === 0) {
            return alert("Kalo anda merokok isi minimal check 1 tipe rokok")
        }

        DataLocal.push(formData)
        window.localStorage.setItem("DataPerokok", JSON.stringify(DataLocal))

        event.target.reset()
        setIsSmoke(false)
        setIsSucces(true)
    }

    if (isSucces) {
        return <Navigate to="/himpunSurvei" replace={true} />
    }

    return (
        <>
            <main className=" font-sans flex flex-col gap-5 w-screen h-full bg-purple-200 text-black px-55 py-10">
                <section className="border-t-15 bg-white rounded-2xl border-t-purple-600 px-5 py-8 flex flex-col gap-5">
                    <h1 className=" text-shadow-black text-5xl">Form Survei Perokok</h1>
                    <h2 className="text-shadow-black text-xl">Mohon di isi</h2>
                </section>
                <form onSubmit={hendleForm} className=" flex flex-col gap-5">
                    <div className="flex flex-col border-transparent bg-white rounded-2xl px-5 py-8 gap-5">
                        <label htmlFor="name">Masukan nama anda :</label>
                        <input required type="text" name="name" placeholder="Input di sini" className="flex items-center border-b outline-none px-2 py-2 w-1/2 focus:border-b-2 focus:border-purple-500" />
                    </div>

                    <div className="flex flex-col border-transparent bg-white rounded-2xl px-5 py-8 gap-5">
                        <label htmlFor="age">Masukan umur anda :</label>
                        <input required type="number" name="age" placeholder="Input di sini" className="flex items-center border-b outline-none px-2 py-2 w-1/2 focus:border-b-2 focus:border-purple-500" />
                    </div>

                    <div className="flex flex-col border-transparent bg-white rounded-2xl px-5 py-8 gap-2">
                        <label htmlFor="jenisKelamin">Pilih jenis kelamin anda :</label>
                        <div className="flex justify-start items-center gap-2">
                            <input required type="radio" name="jenisKelamin" value="L" placeholder="Input di sini" className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="jenisKelamin">Laki-Laki</label>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <input required type="radio" name="jenisKelamin" value="P" placeholder="Input di sini" className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="jenisKelamin">Perempuan</label>
                        </div>
                    </div>

                    <div className="flex flex-col border-transparent bg-white rounded-2xl px-5 py-8 gap-2">
                        <label htmlFor="doUsmoke">Anda perokok Y/N :</label>
                        <div className="flex justify-start items-center gap-2">
                            <input required
                                type="radio"
                                name="doUsmoke"
                                value="y"
                                onChange={() => setIsSmoke(true)}
                                placeholder="Input di sini"
                                className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="doUsmoke">Yes / Y</label>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <input required
                                type="radio"
                                name="doUsmoke"
                                value="n"
                                onChange={() => setIsSmoke(false)}
                                placeholder="Input di sini"
                                className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="doUsmoke">No / N</label>
                        </div>
                    </div>

                    <div className="flex flex-col border-transparent bg-white rounded-2xl px-5 py-8 gap-2">
                        <label htmlFor="cigaratte">Kategori rokok :</label>
                        <label className={isSmoke ? "flex justify-start items-center gap-2" : "flex justify-start items-center gap-2 text-gray-400 line-through"}>
                            <input
                                type="checkbox"
                                name="cigaratte"
                                value="Kretek"
                                disabled={!(isSmoke)}
                                placeholder="Input di sini"
                                className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="cigaratte">Kretek</label>
                        </label>
                        <label className={isSmoke ? "flex justify-start items-center gap-2" : "flex justify-start items-center gap-2 text-gray-400 line-through"}>
                            <input
                                type="checkbox"
                                name="cigaratte"
                                value="Mild"
                                disabled={!(isSmoke)}
                                placeholder="Input di sini"
                                className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="cigaratte">Mild</label>
                        </label>
                        <label className={isSmoke ? "flex justify-start items-center gap-2" : "flex justify-start items-center gap-2 text-gray-400 line-through"}>
                            <input
                                type="checkbox"
                                name="cigaratte"
                                value="Putihan"
                                disabled={!(isSmoke)}
                                placeholder="Input di sini"
                                className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="cigaratte">Putihan</label>
                        </label>
                        <label className={isSmoke ? "flex justify-start items-center gap-2" : "flex justify-start items-center gap-2 text-gray-400 line-through"}>
                            <input
                                type="checkbox"
                                name="cigaratte"
                                value="Mentol"
                                disabled={!(isSmoke)}
                                placeholder="Input di sini"
                                className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="cigaratte">Mentol</label>
                        </label>
                        <label className={isSmoke ? "flex justify-start items-center gap-2" : "flex justify-start items-center gap-2 text-gray-400 line-through"}>
                            <input
                                type="checkbox"
                                name="cigaratte"
                                value="Tembakau"
                                disabled={!(isSmoke)}
                                placeholder="Input di sini"
                                className="w-5 h-5 accent-purple-500 flex items-center border-b outline-none px-2 py-2 focus:border-b-2 focus:border-purple-500" />
                            <label htmlFor="cigaratte">Tembakau</label>
                        </label>
                    </div>

                    <div className="flex justify-between items-center px-5 py-2">
                        <button
                            type="submit"
                            className="border-transparent bg-purple-500 px-5 py-2 rounded-xl hover:bg-green-500 hover:text-white">
                            Submit
                        </button>

                        <button type="reset" className="border-2 text-gray-500 px-5 py-2 rounded-xl mr-5 hover:bg-red-500 hover:text-white hover:border-red-300">Reset</button>
                    </div>
                </form>

            </main >
        </>
    )
}