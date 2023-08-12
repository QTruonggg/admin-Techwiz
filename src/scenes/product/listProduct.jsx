import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import UserContext from "../../store/context";
import React, { useContext, useState, useEffect } from "react";
import {get} from "../../services/typeCar.service";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import { remove_typeCar } from "../../services/typeCar.service";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";



const ListProduct = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const {state,dispatch} = useContext(UserContext);
  const [typeCar, setTypeCar] = useState([]);
  const[idde,setIdde] = useState(0);

  const getType = async ()=>{
    dispatch({type:"SHOW_LOADING"});

    const typeCar = await get();
    setTypeCar(typeCar);
    dispatch({type:"HIDE_LOADING"});

  }
  

  useEffect(()=>{
   getType();
    
   },[]);


  return (
    <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
    <Box m="20px">
      <Header title="LIST PRODUCT" subtitle="LIST OF PRODUCT" />

      <div className="container shadow" style={{display:'grid'}}>
                <h1 style={{margin:'auto', marginTop:'24px'}}>PRODUCTS</h1>
                <Link to={"/create-product"} style={{margin:'24px 0'}}>
                                            <button style={{}} className="btn btn-success">
                                            Create New Product
                                            </button> 
                                            </Link>
                
                <table className="table" style={{}}>
                    <thead>
                        <th style={{}}>STT</th>
                        <th style={{}}>Name</th>
                        <th style={{}}>Description</th>
                        <th style={{}}>Action</th>
                        
                        
                    </thead>
                    <tbody>
                        {
                            typeCar.map((e,k)=>{
                                return (
                                    <tr key={k}>
                                        <td style={{}}>{k+1}</td>    
                                        <td style={{}}>{e.name}</td>    
                                        <td style={{}}>{e.description}</td> 
                                        <td style={{}}><Link to={"/product-edit/"+e.id}>
                                            <button style={{borderRadius:3, backgroundColor:"pink"}} className=" w-50 car__item-btn car__btn-details">
                                            Edit
                                            </button> 
                                            </Link></td>
                                      
                                    </tr>
                                    )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
       
     
    </Box>
    </main>
    </div>
  )
}

export default ListProduct;