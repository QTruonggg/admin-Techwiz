import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import UserContext from "../../store/context";
import React, { useContext, useState, useEffect } from "react";
import {get} from "../../services/brand.service";
import { Link } from "react-router-dom";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";




const ListBrand = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const {state,dispatch} = useContext(UserContext);
  const [brand, setBrand] = useState([]);
  const[idde,setIdde] = useState(0);

  const getType = async ()=>{
    dispatch({type:"SHOW_LOADING"});
    const brand = await get();
    setBrand(brand);
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
      <Header title="LIST PROVIDERS" subtitle="LIST PROVIDERS" />

      <div className="container shadow" style={{display:'grid'}}>
                <h1 style={{margin:'auto', marginTop:'24px'}}>PROVIDERS</h1>
                <Link to={"/create-brands"} style={{margin:'24px 0'}}>
                    <button style={{}} className="btn btn-success">
                        Create New Provider
                    </button> 
                </Link>
                
                <table className="table" style={{}}>
                    <thead>
                        <th style={{}}>STT</th>
                        <th style={{}}>Thumbnail</th>
                        <th style={{}}>Name</th>
                        <th style={{}}>Description</th>
                        <th style={{}}>Action</th>
                        
                        
                    </thead>
                    <tbody>
                        {
                            brand.map((e,k)=>{
                                return (
                                    <tr key={k}>
                                        <td style={{}}>{k+1}</td> 
                                        <td style={{}}><img src={e.thumbnail} width={80} borderRadius ={8}/></td>   
                                        <td style={{}}>{e.name}</td>    
                                        <td style={{}}>{e.description}</td> 
                                        <td style={{}}><Link to={"/brand-edit/"+e.id}>
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

export default ListBrand;