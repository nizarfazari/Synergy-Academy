import { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { convertToISODate } from "../../utils/date-format";



export default function Car() {
    const [cars, setCars] = useState([]);
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

    console.log(cars)



    return (
        <>
            <ul className="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li className="active"><a href="#" >Dashboard</a></li>
            </ul>

            <h1 className="heading-cars">Dashboard</h1>
            <div>
                <p className="heading-border mt-8">List Order</p>
                <table className="w-full table-dashboard mt-4">
                    <thead className="bg-[#CFD4ED]">
                        <tr className="text-center">
                            <th>No</th>
                            <th>User Email</th>
                            <th>Car</th>
                            <th>Start Rent</th>
                            <th>Finish Rent</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {cars && cars.map((val: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>user1@example.com</td>
                                <td>{val.name}</td>
                                <td>{val.start_rent}</td>
                                <td>{val.finish_rent}</td>
                                <td>{val.price}</td>
                                <td>Completed</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className="flex justify-between mt-8 items-center">
                    <div className="flex items-center gap-5">
                        <div>
                            <p className="mb-2 font-light">Limit</p>
                            <select name="" id="" className="w-[58px] h-[34px]">
                                <option value="50">50</option>
                                <option value="40">40</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div>
                            <p className="mb-2 font-light">Jump to Page</p>
                            <select name="" id="" className="w-[76px] h-[34px]">
                                <option value="50">50</option>
                                <option value="40">40</option>
                                <option value="30">30</option>
                            </select>
                            <button className="w-[43px] bg-[#0D28A6] h-[36px] text-white">Go</button>
                        </div>
                    </div>
                    <Pagination
                        aria-label="Page navigation example"
                        size="md"
                        className="flex items-center"

                    >
                        <PaginationItem>
                            <PaginationLink
                                first
                                href="#"
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                previous
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                next
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                last
                            />
                        </PaginationItem>
                    </Pagination>

                </div>
            </div>
            <div>

                <p className="heading-border mt-8">List Car</p>
                <table className="w-full table-dashboard mt-4">
                    <thead className="bg-[#CFD4ED]">
                        <tr className="text-center">
                            <th>No</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Start Rent</th>
                            <th>Finish Rent</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {cars && cars.map((val: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.category}</td>
                                <td>{val.price}</td>
                                <td>{ convertToISODate(val.start_rent)}</td>
                                <td>{convertToISODate(val.finish_rent)}</td>
                                <td>{convertToISODate(val.created_at)}</td>
                                <td>{convertToISODate(val.updated_at)}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className="flex justify-between mt-8 items-center">
                    <div className="flex items-center gap-5">
                        <div>
                            <p className="mb-2 font-light">Limit</p>
                            <select name="" id="" className="w-[58px] h-[34px]">
                                <option value="50">50</option>
                                <option value="40">40</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div>
                            <p className="mb-2 font-light">Jump to Page</p>
                            <select name="" id="" className="w-[76px] h-[34px]">
                                <option value="50">50</option>
                                <option value="40">40</option>
                                <option value="30">30</option>
                            </select>
                            <button className="w-[43px] bg-[#0D28A6] h-[36px] text-white">Go</button>
                        </div>
                    </div>
                    <Pagination
                        aria-label="Page navigation example"
                        size="md"
                        className="flex items-center"

                    >
                        <PaginationItem>
                            <PaginationLink
                                first
                                href="#"
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                previous
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                next
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                last
                            />
                        </PaginationItem>
                    </Pagination>

                </div>
            </div>
        </>
    )
}