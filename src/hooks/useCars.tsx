
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";


interface CarsProps {
    children: React.ReactElement
}


interface FormData {
    date: string;
    driver: string;
    passenger: string;
    time: string;
}

let CarsContext = createContext({});
export const CarsProvider = ({ children }: CarsProps) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetchCars()
    }, [])

    const fetchCars = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
            const carsData = response.data;
            console.log('Data mobil:', carsData);
            setCars(carsData);
        } catch (error) {
            console.error('Error fetching data:', error);
            setCars([]); // Mengatur nilai cars ke array kosong jika terjadi kesalahan
        }
    };

    const findCars = async (e: any, data: FormData) => {
        e.preventDefault();
        console.log(data)
        const dateTime = new Date(`${data.date} ${data.time}`).toISOString();

        if (data.driver === undefined || data.driver === "") {
            alert("Please select a driver");
            return;
        } else if (data.passenger == "" && data.driver.toString() == "true") {
            cars.filter(
                (car: any) => {
                    console.log(dateTime)
                }
            )
            const carFilter = cars.filter(
                (car: any) => car.available === true && car.availableAt <= dateTime
            );

            console.log(carFilter)

            setCars(carFilter)
            return;
        } else if (data.passenger != "" && data.driver.toString() == "true") {
            const carFilter = cars.filter(
                (car: any) =>
                    car.available === true &&
                    car.capacity >= data.passenger &&
                    car.availableAt <= dateTime
            );

            setCars(carFilter)

            return;
        } else if (data.passenger == "" && data.driver.toString() == "false") {
            const carFilter = cars.filter(
                (car: any) => car.available === false && car.availableAt <= dateTime
            );
            console.log('test')
            setCars(carFilter);

            return;
        } else if (data.passenger != "" && data.driver.toString() == "false") {
            const carFilter = cars.filter(
                (car: any) =>
                    car.available === false &&
                    car.capacity >= data.passenger &&
                    car.availableAt <= dateTime
            );

            setCars(carFilter)
            return
        }

    }

    const value = useMemo(() => ({
        cars,
        getCars: fetchCars,
        findCars
    }),
        [cars]
    )
    return (
        <CarsContext.Provider value={value}>
            {children}
        </CarsContext.Provider>
    )


}


export const useCars = () => {
    return useContext(CarsContext);
}

