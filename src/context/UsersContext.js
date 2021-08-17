import { responsiveFontSizes } from "@material-ui/core";
import React, { useEffect, useState, createContext, useContext } from "react";
import { UserApi } from "../services/UserApi";


const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        {name==''?
            UserApi.getAll().then(resp =>setUsers(resp.data ))
            :
            UserApi.getSearch(name).then(resp => setUsers(resp.data))
        }
    }, [name]);
    const value = {
        users,
        name,
        setName
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context){
        throw new Error('To use UserContext please wrap component whith UserContextProvider')
    }
    return context;
};