import { createContext, useState, useEffect } from "react";
import data from './data.json'


export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const respSto = sessionStorage.getItem('respStorage');
    console.log('respStorage',respSto);

    const [ respArray , setRespArray ] = useState([])
    const addResp = (value) => {
        setRespArray(respArray.concat(value));
        sessionStorage.setItem('respStorage',JSON.stringify(respArray))
    }
    useEffect(()=>{
        console.log('respArray',respArray)
    },[respArray])

    console.log(data)
    return (
        <DataContext.Provider value={{data, addResp, respArray}}>
            {children}
        </DataContext.Provider>
    )
}

