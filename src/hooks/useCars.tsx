
import { createContext, useContext, useMemo, useState } from "react";


interface CarsProps {
    children: React.ReactElement
}
let CarsContext = createContext({});
export const CarsProvider = ({ children }: CarsProps) => {
    const [cars, setCars] = useState([])

    const getCars = () => {

    }

    const value = useMemo(() => ({
        cars,
        getCars
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

