import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'
import styles from "./styles.module.css"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Xcountries = () => {
    const [data,setData]=useState([])
    
    const fetchData=async()=> {
      // You can await here
      try{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData=await response.json()
        setData(jsonData)
      }
      catch(err)
      {
         console.log(err.message)
      }
    }


    useEffect(() => {
      fetchData();
    },[]);

  return (
    <div className={styles.container}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {data.length ? data.map((item, index) => (
    <Grid item xs={2} sm={3} md={2} key={index}>
      <div className={styles.wrapper}>
            <div className={styles.card}>
                    <img src={item.flags.png} alt={item.flags.alt} className={styles.cardimg}/>  
                    </div>
                    <div className={styles.titleWrapper}>
                      <h4>{item.name.common}</h4>
                    </div>
                    </div>
    </Grid>
  )): null }
</Grid>
 
    </div>
  )
}

export default Xcountries
