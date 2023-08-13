import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup  from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState,useEffect } from "react";
import { auth_login } from "../../services/auth.service";
import UserContext from "../../store/context";
import {edit_typeCar, remove_typeCar} from "../../services/typeCar.service";
import { useParams } from "react-router-dom";
import { find } from "../../services/typeCar.service";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const EditProduct = (props)=>{
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const {state,dispatch} = useContext(UserContext);
    const {id} = useParams();
    const [ty,setTy] = useState({});
    const[typeCar,setTypeCar]= useState({id:id,name:"",description:""});
    const findType = async ()=>{
        const ty = await find(id);
        setTy(ty);
        setTypeCar({...typeCar, name: ty.name});
        

    }
    useEffect(()=>{
        findType();
        },[]);
    const handleChange = (event)=>{
        typeCar[event.target.name] = event.target.value;
        setTypeCar(typeCar);
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const t = await edit_typeCar(typeCar);
        console.log(t);
    }
    const deleteType = async ()=>{
        alert("Ban co chac chan muon xoa type car");
        await remove_typeCar(id);
    }
   



 return (
    <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
    <Box m="20px">

    <Formik>
       
            <form onSubmit={handleSubmit}>
                
                
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        // label="Name"
                        // onChange={handleChange}
                        name="name"
                        value ={ty.name}         
                        sx={{ gridColumn: "span 4" }}
                    />
                    
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        // label="Description"         
                        onChange={handleChange}
                        name="description"
                        placeholder = {ty.description}
                        // defaultValue = {ty.description}
                        sx={{ gridColumn: "span 4" }}
                    />
                            
                <Box
                display="flex"
                justifyContent="end"
                mt="20px"
                >
                    <Button style={{marginRight:20}} type="submit" color="secondary" variant="contained" >
                        EDIT
                    </Button>
                    <Button onClick={deleteType} color="secondary" variant="contained" >
                        DELETE
                    </Button>
                </Box>
            </form>
     
    </Formik>
   
</Box>
</main>
</div>

)
}

export default EditProduct;