import React from 'react';
import { useUserContext } from '../../context/UsersContext';
import { TextField } from '@material-ui/core';

const TablePage = () => {
    const {users, name, setName} = useUserContext();
    console.log(users);

    return(
        <>
            <div style={{padding:"20px", display: "grid", margin:"auto", width:"30%"}}>
                <TextField id="outlined-search" label="Search by user name..." type="search" variant="outlined" size="small"  value={name} onChange={(e) => setName(e.target.value)}>

                </TextField>
            </div>

        </>
    )
}

export {TablePage};