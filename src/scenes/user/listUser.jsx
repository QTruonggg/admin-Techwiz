import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import UserContext from "../../store/context";
import React, { useContext, useState, useEffect } from "react";
import {get} from "../../services/user.service";
import { Link } from "react-router-dom";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";




const ListUser = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const {state,dispatch} = useContext(UserContext);
  const [user, setUser] = useState([]);
  const[idde,setIdde] = useState(0);

  const getUser = async ()=>{
    dispatch({type:"SHOW_LOADING"});

    const user = await get();
    setUser(user);
    dispatch({type:"HIDE_LOADING"});
    console.log(user);

  }
  

  useEffect(()=>{
   getUser();
    
   },[]);
   console.log(user);


  return (
    <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
    <Box m="20px">

      <div className="container shadow">
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:'24px'}}>

                <h1>ALL USERS </h1>
                </div>
                {/* <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:30, marginBottom:30}}>

                </div> */}

                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                
                <table className="table" style={{}} >
                    <thead>
                        <th style={{}}>STT</th>
                        {/* <th style={{}}>Thumbnail</th> */}
                        <th style={{}}>Name</th>
                        <th style={{}}>Address</th>
                        <th style={{}}>City</th>
                        <th style={{}}>Details</th>

                        
                        
                    </thead>
                    <tbody>
                        {
                            user.map((e,k)=>{
                                return (
                                    <tr key={k}>
                                        <td style={{}}>{k+1}</td> 
                                        {/* <td style={{}}><img src={e.thumbnail} width={80} style={{borderRadius:10}} /></td>   */}
                                        <td style={{}}>{e.name}</td>
                                        <td style={{}}>{e.address}</td> 
                                        <td style={{}}>{e.city}</td>
                                        
                                        <td style={{}}><Link to={"/user-edit/"+e.userId._id}>
                                            <button style={{}} className="btn btn-info">
                                            Detail
                                            </button> 
                                            </Link></td>
                                      
                                    </tr>
                                    )
                            })
                        }
                        
                    </tbody>
                </table>
                </div>
            </div>
       
     
    </Box>
    </main>
    </div>
  )
}

export default ListUser;