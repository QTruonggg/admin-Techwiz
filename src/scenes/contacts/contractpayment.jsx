import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import UserContext from "../../store/context";
import React, { useContext, useState, useEffect } from "react";
import {  getcontractpayment } from "../../services/contract.service";
import Car from "../../components/Car";
import { alignBox } from "@nivo/core";
import { CenterFocusStrong } from "@mui/icons-material";
import { find } from "../../services/contract.service";
import { Link } from "react-router-dom";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";


const Contractpayment = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const {state,dispatch} = useContext(UserContext);
    const [contract, setContracts] = useState([]);

    const getdata = async () => {
        dispatch({type:"SHOW_LOADING"});

        const d = await getcontractpayment();
        setContracts(d);
        dispatch({type:"HIDE_LOADING"});

    }
    
    useEffect(()=>{
        getdata();
         
        },[]);
    

    

    return (
        <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
        <Box m="20px" >
        <Header title="LIST CONTRACTS PAYMNET " subtitle="LIST CONTRACTS PAYMENT " />
        
  
        <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  
                
                  
                  <table className="table table-bordered table-dark" style={{border:"1px solid white", marginTop:20}}>
                      <thead>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">STT</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">Car</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">Name</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">Tel</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">Address</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">Description</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">Giatrihopdong</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">Giatridatcoc</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">CCCD</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">Thumbnail</th>
                          <th style={{border:"1px solid white", marginTop:20}} scope="col">NgayThue</th>

                          <th style={{border:"1px solid white", marginTop:20}} scope="col">NgayTra</th>


                          {/* <th style={{border:"1px solid white", marginTop:20}} scope="col">Detail</th> */}
                          
                          
                          
                      </thead>
                      <tbody>
                          {
                              contract.map((e,k)=>{
                                  return (
                                      <tr key={k}>
                                          <td style={{border:"1px solid white"}}>{k+1}</td> 
                                          <td style={{border:"1px solid white"}}><Car item = {e.cars}/></td>
                                          <td style={{border:"1px solid white"}}>{e.name}</td>
                                          <td style={{border:"1px solid white"}}>{e.tel}</td>
                                          <td style={{border:"1px solid white"}}>{e.address}</td>    
                                          <td style={{border:"1px solid white"}}>{e.contents}</td> 
                                          <td style={{border:"1px solid white"}}>{e.giatrihopdong}</td>
                                          <td style={{border:"1px solid white"}}>{e.giatridatcoc}</td>
                                          <td style={{border:"1px solid white"}}>{e.cccd}</td>
                                          <td style={{border:"1px solid white"}}><img src={e.thumbnail} width={80} style={{borderRadius:10}} /></td> 
                                          <td style={{border:"1px solid white"}}>{new Date(e.ngaythue).toLocaleDateString()}</td>
                                          <td style={{border:"1px solid white"}}>{new Date(e.ngaytra).toLocaleDateString()}</td>

                                          {/* <td style={{border:"1px solid white", marginTop:20}}><Link to={"/contract-edit/"+e.id}>
                                            <button style={{borderRadius:3, backgroundColor:"pink"}} className=" w-50 car__item-btn car__btn-details">
                                            Detail
                                            </button> 
                                            </Link></td>
                                           */}
                                             
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

export default Contractpayment;