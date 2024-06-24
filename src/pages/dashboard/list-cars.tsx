import { IoKeyOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";

import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { convertToISODate } from "../../utils/date-format";
import { useNavigate } from "react-router-dom";


export default function ListCars() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetchCars();
    }, []); // Fetch data saat komponen dimuat pertama kali

    const fetchCars = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/cars');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setCars(data.data); // Set data mobil ke dalam state cars
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error fetching data (misalnya menampilkan pesan error)
        }
    };


    const onDeleteCars = async (id: number) => {
        try {
            const localUser = localStorage.getItem('user');
            if (localUser) {
                const user = JSON.parse(localUser)

                const response = await fetch(`http://localhost:5000/api/v1/cars/${id}`, {
                    method: 'delete',
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed get data');
                }
                const data = await response.json();
                window.location.reload()
            }


        } catch (error: any) {
            console.error('data cant get:', error);

        }
    }
    return (
        <div className="mb-20">
            <ul className="breadcrumb">
                <li><a href="#">Cars</a></li>
                <li className="active"><a href="#" >List Cars</a></li>
            </ul>

            <div className="flex justify-between items-center">
                <h1 className="heading-cars">List Cars</h1>
                <a href="/dashboard/create" className="flex items-center gap-2 bg-[#0D28A6] text-white px-3 py-2">
                    <i>+</i>
                    <p>  Add New Cars</p>
                </a>
            </div>

            <div className="flex gap-4 mt-2">
                <button className="border !border-[#0D28A6] px-3 py-2 text-[#0D28A6] font-bold">All</button>
                <button className="border !border-[#AEB7E1] px-3 py-2 text-[#AEB7E1] font-bold">Small</button>
                <button className="border !border-[#AEB7E1] px-3 py-2 text-[#AEB7E1] font-bold">Medium</button>
                <button className="border !border-[#AEB7E1] px-3 py-2 text-[#AEB7E1] font-bold">Large</button>
            </div>
         

            <div className="grid grid-cols-3 mt-6 gap-4">
                {cars && cars.map((val: any, index: number) => (
                    <div className="bg-white rounded-lg col-span-1 p-7 h-fit" key={index}>
                        <div className="flex justify-center items-center mb-4">
                            <img src={val.image_url} alt="" />
                        </div>
                        <p>{val.name}</p>
                        <h1 className="text-lg mb-2">Rp. {val.price} /hari</h1>
                        <div className="flex items-center gap-2 mb-2">
                            <IoKeyOutline className="text-[#8A8A8A] text-lg" />
                            <p className="text-md">{convertToISODate(val.start_rent)} - {convertToISODate(val.finish_rent)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CiClock1 className="text-[#8A8A8A] text-lg" />
                            <p>{convertToISODate(val.updated_at)}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full mt-4">
                            <button onClick={() => onDeleteCars(val.id)} className="border !border-[#FA2C5A] text-[#FA2C5A] px-3 py-2 flex items-center gap-3 justify-center">
                                <FaTrash />
                                <p>Delete</p>
                            </button>
                            <a href={`/dashboard/edit/${val.id}`} className="text-white bg-[#5CB85F] px-3 py-2 flex items-center gap-3 justify-center">
                                <FaEdit />
                                <p>Edit</p>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}