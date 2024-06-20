import axios from "axios";
import { useEffect, useState } from "react";

interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
}
export default function FindCar() {
    const [cars, setCars] = useState<Car[]>([]);


    console.log('Data mobil:', cars);

    const FindCar = async () => {
        try {
            const response = await axios.get<Car[]>('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');

            // Data dapat diakses melalui response.data
            const cars = response.data;

            // Lakukan sesuatu dengan data mobil, contoh:
            console.log('Data mobil:', cars);

            return cars; // Mengembalikan data mobil
        } catch (error) {
            console.error('Error fetching data:', error);
            return []; // Mengembalikan array kosong jika terjadi kesalahan
        }
    };
    useEffect(() => {
        FindCar()
    }, []);

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
                    <div className="search-content">
                        <div className="input-group d-flex flex-column">
                            <p>Tipe Driver</p>
                            <select className="form-select" id="driver" required>
                                <option className="item" value="" selected hidden>
                                    Pilih Tipe Driver
                                </option>
                                <option className="item" value="true">Dengan Sopir</option>
                                <option className="item" value="false">
                                    Tanpa Sopir (Lepas Kunci)
                                </option>
                            </select>
                        </div>
                        <div className="input-group d-flex flex-column">
                            <p>Tanggal</p>
                            <input type="date" className="form-control" id="date" required />
                        </div>
                        <div className="input-group d-flex flex-column">
                            <p>Waktu Jemput/Ambil</p>
                            <input type="time" id="time" className="form-control" required />
                        </div>
                        <div className="input-group d-flex flex-column">
                            <p>Jumlah Penumpang (Opsional)</p>
                            <div className="d-flex flex-row">
                                <input
                                    type="number"
                                    className="form-control item"
                                    id="passanger"
                                    style={{ backgroundColor: 'white' }}
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
                    </div>
                </section>



                <div className="container result-container">
                    <div className="result d-flex" id="cars-container">

                    </div>
                </div>

            </main>
        </>
    )
}