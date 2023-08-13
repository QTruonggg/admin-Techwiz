import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup  from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState } from "react";
import { auth_login } from "../../services/auth.service";
import UserContext from "../../store/context";
import {create_typeCar} from "../../services/typeCar.service";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import api from "../../services/api";
import { create_movie } from "../../services/movie.service";

const CreateProduct = ()=>{
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const { state, dispatch } = useContext(UserContext);
    const [file, setFile] = useState();
    const [fileUrl, setFileUrl] = useState();
    const [movie, setMovie] = useState({
      name: "",
      description: "",
      provider:"",
      actor:"",
      thumbnail: "/uploads/streamprovider/po5.jpg",
    });
    const handleChange = (event) => {
      movie[event.target.name] = event.target.value;
      setMovie(movie);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const t = await create_movie(movie);
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
    //   setMovie({ ...movie, thumbnail: rs.data });
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
                      onChange={handleChange}
                      name="description"
                      sx={{ gridColumn: "span 2" }}
                    />
                  </Box>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box display="grid" width="48%">
                    <label>Provider </label>

                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      onChange={handleChange}
                      name="provider"
                      sx={{ gridColumn: "span 2" }}
                    />
                  </Box>
                  <Box display="grid" width="48%">
                    <label>Actor: </label>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      onChange={handleChange}
                      name="actor"
                      sx={{ gridColumn: "span 2" }}
                    />
                  </Box>
                </div>
                {/* <p style={{ marginTop: 40 }}></p>
                <div style={{display:'flex', alignItems:'flex-end'}}>
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

)
}

export default CreateProduct;