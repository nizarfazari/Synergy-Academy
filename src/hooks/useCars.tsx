
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";


interface CarsProps {
    children: React.ReactElement
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

    const findCars = async (e: any, data : any) => {
        e.preventDefault();
        console.log(data)

        
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

