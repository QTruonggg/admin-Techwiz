import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup  from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState,useEffect } from "react";
import UserContext from "../../store/context";
import {edit_user} from "../../services/user.service";
import { useParams } from "react-router-dom";
import { find } from "../../services/user.service";
import api from "../../services/api";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";




const EditUser = (props)=>{
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const {state,dispatch} = useContext(UserContext);
    const {id} = useParams();
    const [user,setUser] = useState({});
    const [pack, setPack] = useState([]);
    
    const findUser = async ()=>{
        const user = await find(id);
        setUser(user);
        
    }
    useEffect(()=>{
        findUser();
        },[]);


 return (
    <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
    <Box m="20px">
    <Header title="LIST PACKAGES" subtitle="LIST PACKAGES" />

    <div className="container">
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

              <h1>ALL PACKAGE</h1>
              </div>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:30, marginBottom:30}}>

              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              
              <table className="table" style={{border:"1px solid white"}} >
                  <thead>
                      <th style={{padding:5,border:"1px solid white"}}>STT</th>
                      <th style={{padding:5,border:"1px solid white"}}>Status</th>
                      <th style={{padding:5,border:"1px solid white"}}>Name</th>
                      <th style={{padding:5,border:"1px solid white"}}>Price</th>
                      <th style={{padding:5,border:"1px solid white"}}>Description</th>
                      

                      
                      
                  </thead>
                  <tbody>
                      {
                          pack.map((e,k)=>{
                              return (
                                  <tr key={k}>
                                      <td style={{padding:5,border:"1px solid white"}}>{k+1}</td> 
                                      <td style={{padding:5,border:"1px solid white"}}>{(e.isActive)?"Active":"Not"}</td>
                                      {/* <td style={{padding:5,border:"1px solid white"}}><img src={e.thumbnail} width={80} style={{borderRadius:10}} /></td>   */}
                                      <td style={{padding:5,border:"1px solid white"}}>{e.name}</td>
                                      <td style={{padding:5,border:"1px solid white"}}>{e.price}</td>    
                                      <td style={{padding:5,border:"1px solid white"}}>{e.description}</td> 
                                      
                                      
                                    
                                    
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

export default EditUser;