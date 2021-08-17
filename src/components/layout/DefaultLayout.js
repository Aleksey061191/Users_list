import React from "react";
import { Header } from "../header/Header";
import { useStyles } from "./DefaultLayout.styles";

const DefaultLayout = ({children, routes}) => {
    const classes = useStyles();
    return (<div className={classes.app} >
        <div className={classes.header} >
        <Header />
        </div>
        <div className={classes.content} > {children} </div> </div >
    );
};


export {DefaultLayout};