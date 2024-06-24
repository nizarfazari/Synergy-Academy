import axios from "axios";
import { useEffect, useState } from "react";
import { useCars } from "../hooks/useCars";
import { IoKeyOutline } from "react-icons/io5";
import { convertToISODate } from "../utils/date-format";
import { CiClock1 } from "react-icons/ci";

interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
}
export default function FindCar() {


    const { cars, findCars } = useCars()
    console.log('Data mobil:', cars);

    const [formData, setFormData] = useState({
        driver: '',
        date: '',
        time: '',
        passenger: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };



    return (
        <>
            <header className="header">
                <div className="row align-items-center">
                    <div className="col-sm container-left">
                        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p>
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                            untuk sewa mobil selama 24 jam.
                        </p>
                    </div>
                    <div className="col-sm mt-5 mt-col-0">
                        <div className="d-flex justify-content-end">
                            <img
                                className="header__image"
                                src="./images/img_car-2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </header>


            <main role="main">
                <section className="search-box">
                    <form className="search-content" onSubmit={(e) => findCars(e, formData)}>
                        <div className="input-group d-flex flex-column">
                            <p>Tipe Driver</p>
                            <select
                                className="form-select"
                                id="driver"
                                
                                value={formData.driver}
                                onChange={handleChange}
                            >
                                <option className="item" value="" disabled hidden>
                                    Pilih Tipe Driver
                                </option>
                                <option className="item" value="true">Dengan Sopir</option>
                                <option className="item" value="false">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="input-group d-flex flex-column">
                            <p>Tanggal</p>
                            <input
                                type="date"
                                className="form-control"
                                id="date"
                                
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group d-flex flex-column">
                            <p>Waktu Jemput/Ambil</p>
                            <input
                                type="time"
                                id="time"
                                className="form-control"
                                
                                value={formData.time}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group d-flex flex-column">
                            <p>Jumlah Penumpang (Opsional)</p>
                            <div className="d-flex flex-row">
                                <input
                                    type="number"
                                    className="form-control item"
                                    id="passenger"
                                    style={{ backgroundColor: 'white' }}
                                    value={formData.passenger}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn button-search border-0 px-2"
                            id="load-btn"
                        >
                            Cari Mobil
                        </button>
                    </form>
                </section>



                <div className="container grid grid-cols-3 mt-6 gap-4">

                    {cars && cars.map((val: any, index: number) => (
                        <div className="bg-slate-200 rounded-lg col-span-1 p-7 h-fit" key={index}>
                            <div className="flex justify-center items-center mb-4">
                                <img src={val.image} alt="" className="w-[350px] h-[240px]" />
                            </div>
                            <p>{val.manufacture} - {val.model}</p>
                            <h1 className="text-lg mb-2">Rp. {val.rentPerDay} /hari</h1>
                            <div className="flex items-center gap-2 mb-2">
                                <IoKeyOutline className="text-[#8A8A8A] text-lg" />
                                <p className="text-md">{val.capacity} Orang </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CiClock1 className="text-[#8A8A8A] text-lg" />
                                <p>{convertToISODate(val.availableAt)}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full mt-4">
                                {/* <button onClick={() => onDeleteCars(val.id)} className="border !border-[#FA2C5A] text-[#FA2C5A] px-3 py-2 flex items-center gap-3 justify-center">
                                       <FaTrash />
                                       <p>Delete</p>
                                   </button>
                                   <a href={`/dashboard/edit/${val.id}`} className="text-white bg-[#5CB85F] px-3 py-2 flex items-center gap-3 justify-center">
                                       <FaEdit />
                                       <p>Edit</p>
                                   </a> */}
                            </div>
                        </div>
                    ))}

                </div>

            </main>
        </>
    )
}