import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup  from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState,useEffect } from "react";
import { auth_login } from "../../services/auth.service";
import UserContext from "../../store/context";
import {edit_brand, remove_brand} from "../../services/brand.service";
import { useParams } from "react-router-dom";
import { find } from "../../services/brand.service";
import api from "../../services/api";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";


const EditBrand = (props)=>{
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const {state,dispatch} = useContext(UserContext);
    const [file, setFile] = useState();
    const [fileUrl, setFileUrl] = useState();
    const {id} = useParams();
    const [br,setBr] = useState({});
    const[brand,setBrand]= useState({id:id,name:"",description:"",thumbnail:""});
    const findBrand = async ()=>{
        const br = await find(id);
        await setBr(br);
        setBrand({...brand, thumbnail: br.thumbnail});
        setBrand({...brand, name: br.name});
     
    }
    useEffect(()=>{
        findBrand();
        },[]);
        console.log(brand);
        
    const handleChange = (event)=>{
        brand[event.target.name] = event.target.value;
        setBrand(brand);
        if(event.target.thumbnail == null){
            setBrand({...brand,thumbnail:br.thumbnail})
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const t = await edit_brand(brand);
        
    }
    const deleteBrand = async ()=>{
        alert("Ban co chac chan muon xoa type car");
        await remove_brand(id);
    }
    const thumbnail = fileUrl? <img src={fileUrl} width={80}/>:null;
const uploadFile =  (e)=>{
    const f =  e.target.files[0];
    setFile(f);
}
const submitUpload = async ()=>{
   
    const url = "upload/image";
    const formData = new FormData();
    formData.append("image",file);
    const config = {
        headers:{
            "content-type": "multipart/form-data"
        }
    };
   const rs = await api.post(url,formData,config);
   setFileUrl(rs.data);
   setBrand({...brand,thumbnail:rs.data});
}

   



 return (
    <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
    <Box m="20px">

    <Formik>
       
            <form onSubmit={handleSubmit}>
            <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                
                
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        // label="Name"
                        // onChange={handleChange}
                        name="name"
                        value ={br.name}         
                        sx={{ gridColumn: "span 4" }}
                    />
                    
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        // label="Description"         
                        onChange={handleChange}
                        name="description"
                        placeholder = {br.description}
                        // defaultValue = {ty.description}
                        sx={{ gridColumn: "span 4" }}
                    />
                    
                    </Box>
                    <div style={{marginTop:20}}>
                        <img src={br.thumbnail} width={120} style={{borderRadius:10}}/>
                    </div>
                    
                    <div style= {{marginTop:20}}>
                     <label for="avatar" className="form-label">Thumbnail Change
                    {thumbnail}
                    </label>
                    <input type="file" onChange={uploadFile} name="avatar" class="form-control" id="avatar"/>
                    <button onClick={submitUpload} class="btn btn-outline-secondary" type="button">Upload</button>
                    </div>
                            
                <Box
                display="flex"
                justifyContent="end"
                mt="20px"
                >
                    <Button style={{marginRight:20}} type="submit" color="secondary" variant="contained" >
                        EDIT
                    </Button>
                    <Button onClick={deleteBrand} color="secondary" variant="contained" >
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

export default EditBrand;