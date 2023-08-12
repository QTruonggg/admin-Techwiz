import { Box, Button} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState,useEffect } from "react";
import UserContext from "../../store/context";
import { useParams } from "react-router-dom";
import { find } from "../../services/contract.service";
import { edit_contract } from "../../services/contract.service";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";




const EditContract = (props)=>{
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const {state,dispatch} = useContext(UserContext);
  
    const {id} = useParams();
    const [c,setC] = useState({});
    const[car,setCar] = useState({});    
    const[con,setCon]= useState({id:id ,numberContract:"",name:"",address:"",email:"",tel:"",thumbnail:"",cccd:"",status:0,contents:"",ngaykyhopdong:"",ngaythue:"",ngaytra:"",giatrihopdong:0,giatridatcoc:0,carsId:0,usersId:0});
    const findContract = async ()=>{
        dispatch({type:"SHOW_LOADING"});

        const c = await find(id);
        setC(c);
        setCar(c.cars);
        setCon({...con,numberContract:c.numberContract,name:c.name,address:c.address,email:c.email,tel:c.tel,thumbnail:c.thumbnail,cccd:c.cccd,status:0,contents:c.contents,ngaykyhopdong:c.ngaykyhopdong,ngaythue:c.ngaythue,ngaytra:c.ngaytra,giatrihopdong:c.giatrihopdong,giatridatcoc:c.giatridatcoc,carsId:c.carsId,usersId:c.usersId});
        dispatch({type:"HIDE_LOADING"});

    }
    console.log(con);
    useEffect(()=>{
        findContract();
        },[]);
        
        const agree = async()=>{
            dispatch({type:"SHOW_LOADING"});

            setCon({...con,status:1});
            const t = await edit_contract(con);
            dispatch({type:"HIDE_LOADING"});


        }
        console.log(con);
        const disagree = async()=>{
            dispatch({type:"SHOW_LOADING"});

            setCon({...con,status:3});
            const t = await edit_contract(con);
            dispatch({type:"HIDE_LOADING"});


        }
   


 return (
    <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
    <Box m="20px">
    <Header title="CONTRACT" subtitle="INFORMATION CONTRACT" />

        
        <div style={{display: 'flex',  justifyContent:'space-between', alignItems:'center'}} >
        <div>
        <img src={car.thumbnail} width={400} style={{borderRadius:10}}/>
        </div>
        <div>
        <p>Name: {c.name}</p>
        <p>Address: {c.address}</p>
        <p>Car: {car.name}</p>
        <p>Bienso: {car.bienso}</p>
        <p>Tinhtrangxe: {car.description}</p>
        <p>Giathue1ngay: {car.giathue1ngay}</p>
        <p>Giatrihopdong: {c.giatrihopdong}</p>
        <p>Giatridatcoc: {c.giatridatcoc}</p>
        
        </div>
        <div>
        <p>Contents: {c.contents}</p>
        <p>Ngaythue: {new Date(c.ngaythue).toLocaleDateString()}</p>
        <p>Ngaytra: {new Date(c.ngaytra).toLocaleDateString()}</p>

        <p>So CCCD: {c.cccd}</p>
        <p>Image CCCD</p>
       <img src={c.thumbnail} width={190} style={{borderRadius:10}} />
        </div>
        </div>
    
    

       
    
                       <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:30}}>
                    <Button onClick={agree} color="secondary" variant="contained" >
                        AGREE
                    </Button>
                    <Button style={{marginLeft:30}} onClick={disagree} color="secondary" variant="contained" >
                        DISAGREE
                    </Button>
                    </div>
                
        
     
   
   
</Box>
</main>
</div>

)
}

export default EditContract;