import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState } from "react";
import { auth_login } from "../../services/auth.service";
import UserContext from "../../store/context";
import { create_brand } from "../../services/brand.service";
import api from "../../services/api";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const CreateBrand = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const { state, dispatch } = useContext(UserContext);
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const [brand, setBrand] = useState({
    name: "",
    description: "",
    packages:"",
    thumbnail: "/uploads/streamprovider/vider2.jpg",
  });
  const handleChange = (event) => {
    brand[event.target.name] = event.target.value;
    setBrand(brand);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const t = await create_brand(brand);
    console.log(t);
  };
  // const thumbnail = fileUrl ? <img src={fileUrl} width={80} /> : null;
  // const uploadFile = (e) => {
  //   const f = e.target.files[0];
  //   setFile(f);
  // };
  // const submitUpload = async () => {
  //   const url = "upload/image";
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };
  //   const rs = await api.post(url, formData, config);
  //   setFileUrl(rs.data);
  //   setBrand({ ...brand, thumbnail: rs.data });
  // };

  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Box m="20px">

          <div className="container shadow">
            <Formik>
              <form onSubmit={handleSubmit} style={{ padding: "40px 24px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box display="grid" width="48%">
                    <label>Name: </label>

                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Name"
                      onChange={handleChange}
                      name="name"
                      sx={{ gridColumn: "span 2" }}
                    />
                  </Box>
                  <Box display="grid" width="48%">
                    <label>Description: </label>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Description"
                      onChange={handleChange}
                      name="description"
                      sx={{ gridColumn: "span 2" }}
                    />
                  </Box>
                  
                </div>
                <Box display="grid" width="48%">
                    <label>Package: </label>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Package"
                      onChange={handleChange}
                      name="packages"
                      sx={{ gridColumn: "span 2" }}
                    />
                  </Box>
                <p style={{ marginTop: 40 }}></p>
                {/* <div style={{display:'flex', alignItems:'flex-end'}}>
                <Box display="grid" width="48%">
                <label for="avatar" className="form-label">
                  Image :{thumbnail}
                </label>
                <input
                  type="file"
                  onChange={uploadFile}
                  name="avatar"
                  class="form-control"
                  id="avatar"
                />
                </Box>
                <button
                  onClick={submitUpload}
                  className="btn btn-success"
                  type="button"
                  style={{marginLeft:'24px'}}
                >
                  Upload
                </button>
                </div> */}

                <Box
                  display="flex"
                  justifyContent="end"
                  mt="20px"
                  style={{}}
                >
                  <button type="submit" className="btn btn-primary" variant="contained">
                    CREATE
                  </button>
                </Box>
              </form>
            </Formik>
          </div>
        </Box>
      </main>
    </div>
  );
};

export default CreateBrand;
