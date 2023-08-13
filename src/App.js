import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices'
import Form from './scenes/form'
import Calendar from './scenes/calendar'
import FAQ from './scenes/faq'
import Bar from './scenes/bar'
import Pie from './scenes/pie'
import Line from './scenes/line'
import Geography from './scenes/geography'
import Login from "./scenes/login";
import INIT_STATE from './store/initState';
import  UserContext, { UserProvider } from './store/context';
import reducer from './store/reducer';
import React, { useContext, useReducer, useState } from "react";
import Profile from "./scenes/profile";

import CreateBrand from "./scenes/brand/create";
import ListBrand from "./scenes/brand/listBrand";
import EditBrand from "./scenes/brand/editBrand";
import EditContract from "./scenes/contacts/editContract";
import Contractagree from "./scenes/contacts/contractagree";
import Contractpayment from "./scenes/contacts/contractpayment";
import Contractdisagree from "./scenes/contacts/contractdisagree";
import ListUser from "./scenes/user/listUser";
import EditUser from "./scenes/user/editUser";
import './css/sb-admin-2.min.css'
import CreateProduct from "./scenes/product/create";
import EditProduct from "./scenes/product/editType";
import ListProduct from "./scenes/product/listProduct";
import ListFeedback from "./scenes/feedback/listfeedback";

function PrivateRoute({ element }) {
  const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
  const [state,dispatch] = useReducer(reducer,localState);
  // Kiểm tra trạng thái đăng nhập, nếu đã đăng nhập thì cho phép truy cập, ngược lại chuyển hướng đến trang đăng nhập
  return (state.userlogin !== null) ? element : <Navigate to="/" />;
}

function PrivateRouteLg({ element }) {
  const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
  const [state,dispatch] = useReducer(reducer,localState);
  // Kiểm tra trạng thái đăng nhập, nếu đã đăng nhập thì cho phép truy cập, ngược lại chuyển hướng đến trang đăng nhập
  return (state.userlogin === null) ? element : <Navigate to="/home" />;
}

function App() {
  const [theme, colorMode] = useMode();
  const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
  const [state,dispatch] = useReducer(reducer,localState);
  const styles = {
    backgroundImage:"url(/Wedges-3s-200px.gif)",
    width:"100%",
    height:"100%",
    position:"fixed",
    top:0,
    left:0,
    backgroundColor:"#000000",
    opacity:0.8,
    zIndex:100,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    display: state.isLoading?"block":"none"
  }
  return (
    <>
    {(state.userlogin === null)? 
    <UserProvider value={{state,dispatch}}>
    <div id='loading' style={styles}></div>

  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<PrivateRoute element={<Dashboard />} />} />
            {/* <Route path="/team" element={<PrivateRoute element={<Team />} />} /> */}
            {/* <Route path="/contacts" element={<PrivateRoute element={<Contacts />} />} /> */}
            {/* <Route path="/invoices" element={<PrivateRoute element={<Invoices />} />} /> */}
            <Route path="/form" element={<PrivateRoute element={<Form />} />} />
            <Route path="/listbrand" element={<PrivateRoute element={<ListBrand />} />} />
            <Route path="/listfeedback" element={<PrivateRoute element={<ListFeedback />} />} />

            {/* <Route path="/faq" element={<PrivateRoute element={<FAQ />} />} /> */}
            {/* <Route path="/bar" element={<PrivateRoute element={<Bar />} />} /> */}
            {/* <Route path="/pie" element={<PrivateRoute element={<Pie />} />} /> */}
            {/* <Route path="/line" element={<PrivateRoute element={<Line />} />} /> */}
            {/* <Route path="/geography" element={<PrivateRoute element={<Geography />} />} /> */}
            {/* <Route path="/profile" element={<PrivateRoute element={<Profile />} />} /> */}
            <Route path="/listtype" element={<PrivateRoute element={<ListProduct />} />} />
            <Route path="/create-product" element={<PrivateRoute element={<CreateProduct />} />} />
            <Route path='/product-edit/:id' element={<PrivateRoute element={<EditProduct />} />} />
            <Route path="/create-brands" element={<PrivateRoute element={<CreateBrand />} />} />
            <Route path='/brand-edit/:id' element={<PrivateRoute element={<EditBrand />} />} />

            <Route path="/listUser" element={<PrivateRoute element={<ListUser />} />} />
            <Route path='/user-edit/:id' element={<PrivateRoute element={<EditUser />} />} />
            <Route path='/contract-edit/:id' element={<PrivateRoute element={<EditContract />} />} />
            {/* <Route path='/contractagree' element={<PrivateRoute element={<Contractagree />} />} /> */}
            {/* <Route path='/contractdisagree' element={<PrivateRoute element={<Contractdisagree />} />} /> */}
            {/* <Route path='/contractpayment' element={<PrivateRoute element={<Contractpayment />} />} /> */}
          </Routes>

    </ThemeProvider>
  </ColorModeContext.Provider>
  </UserProvider>
    :
    <UserProvider value={{state,dispatch}}>
      <div id='loading' style={styles}></div>

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/team" element={<PrivateRoute element={<Team />} />} />
            <Route path="/contacts" element={<PrivateRoute element={<Contacts />} />} />
            <Route path="/invoices" element={<PrivateRoute element={<Invoices />} />} />
            <Route path="/form" element={<PrivateRoute element={<Form />} />} />
            <Route path="/listbrand" element={<PrivateRoute element={<ListBrand />} />} />
            <Route path="/listfeedback" element={<PrivateRoute element={<ListFeedback />} />} />

            {/* <Route path="/faq" element={<PrivateRoute element={<FAQ />} />} /> */}
            {/* <Route path="/bar" element={<PrivateRoute element={<Bar />} />} /> */}
            {/* <Route path="/pie" element={<PrivateRoute element={<Pie />} />} /> */}
            {/* <Route path="/line" element={<PrivateRoute element={<Line />} />} /> */}
            {/* <Route path="/geography" element={<PrivateRoute element={<Geography />} />} /> */}
            {/* <Route path="/profile" element={<PrivateRoute element={<Profile />} />} /> */}
            <Route path="/listtype" element={<PrivateRoute element={<ListProduct />} />} />
            <Route path="/create-product" element={<PrivateRoute element={<CreateProduct />} />} />
            <Route path='/product-edit/:id' element={<PrivateRoute element={<EditProduct />} />} />
            <Route path="/create-brands" element={<PrivateRoute element={<CreateBrand />} />} />
            <Route path='/brand-edit/:id' element={<PrivateRoute element={<EditBrand />} />} />

            <Route path="/listUser" element={<PrivateRoute element={<ListUser />} />} />
            <Route path='/user-edit/:id' element={<PrivateRoute element={<EditUser />} />} />
            {/* <Route path='/contract-edit/:id' element={<PrivateRoute element={<EditContract />} />} /> */}
            {/* <Route path='/contractagree' element={<PrivateRoute element={<Contractagree />} />} /> */}
            {/* <Route path='/contractdisagree' element={<PrivateRoute element={<Contractdisagree />} />} /> */}
            {/* <Route path='/contractpayment' element={<PrivateRoute element={<Contractpayment />} />} /> */}
          </Routes>

      </ThemeProvider>
    </ColorModeContext.Provider>
    </UserProvider>
    
    }
    
    </>
  );
}

export default App;
