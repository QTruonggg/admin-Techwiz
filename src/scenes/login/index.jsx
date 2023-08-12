import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup  from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState } from "react";
import { auth_login } from "../../services/auth.service";
import UserContext from "../../store/context";
import api from "../../services/api";
import '../../vendor/fontawesome-free/css/all.min.css'
import imgLg from '../../img/login-admin.png'
import { useNavigate } from "react-router-dom";
import Dashboard from "../dashboard";


const Login = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const {state,dispatch} = useContext(UserContext);
    const [user,setUser] = useState({email:"",password:""});
    const navigate = useNavigate();
    
    const handleChange = (event)=>{
        user[event.target.name] = event.target.value;
        setUser(user);
    }
   
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const u = await auth_login(user);
        dispatch({type:"UPDATE_USER",payload:u.data.user});
        state.userlogin = u.data.user;
        setTimeout(()=>{dispatch({type:"HIDE_LOADING"})},1000);
        localStorage.setItem("state",JSON.stringify(state));
        api.defaults.headers.common["Authorization"] = `Bearer ${u.token}`;
        console.log(state.userlogin);
        if(state.userlogin !== undefined){
            console.log("chạy vào đây r");
            return  navigate("/home");
        }
        
        
    }
    

    return (
        
        <div className="bg-gradient-primary"> 
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block ">
                                            <img src={imgLg} alt="ImageLogin" style={{width:'100%'}}/>
                                        </div>
                                        <div className="col-lg-6" style={{display:'grid', alignItems:'center'}}>
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Admin</h1>
                                                </div>
                                                <form className="user" onSubmit={handleSubmit}>

                                                    <div className="form-group">
                                                        <input  type="email" className="form-control form-control-user" name="email"
                                                            id="exampleInputEmail" aria-describedby="emailHelp" onChange={handleChange}
                                                            placeholder="Email..."/>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user" name="password" onChange={handleChange}
                                                            id="exampleInputPassword" placeholder="Password"/>
                                                    </div>
                                                    
                                                    <button type="submit" className="btn btn-primary btn-user btn-block" variant="contained" >
                                                    LOGIN
                                                    </button>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  
        
       
    )
}

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });

export default Login;