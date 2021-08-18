import React from 'react';
import { useUserContext } from '../../context/UsersContext';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      width: '100%',
      maxWidth: 400,
      backgroundColor: theme.palette.background.paper,
    },
  }));


const TablePage = () => {
    const {users, name, setName} = useUserContext();
    console.log(users);
      

    const classes = useStyles();
    const id = 0;
    return(
        <>
            <div style={{padding:"20px", display: "grid", margin:"auto", width:"30%"}}>
                <TextField id="outlined-search" label="Search by user name..." type="search" variant="outlined" size="small"  value={name} onChange={(e) => setName(e.target.value)}>

                </TextField>
            </div>

            
            <List component="nav" className={classes.root} aria-label="contacts">
                
              {users.map(item=>{ 
                return(
                  <ListItem >
                    <ListItemIcon>
                      {`${item.id}.`}
                    </ListItemIcon>
                    <ListItemText style={{width:''}}  primary={item.name} />
                    <ListItemText  style={{color:"rgba(0, 0, 0, 0.54)"}} primary={`@${item.username}`} />
                    
                  </ListItem>
                  
                ) 
              })}
              
              
            </List>

        </>
    )
}

export {TablePage};