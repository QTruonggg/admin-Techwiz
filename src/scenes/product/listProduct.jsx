import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import UserContext from "../../store/context";
import React, { useContext, useState, useEffect } from "react";
import { get } from "../../services/movie.service";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { remove_typeCar } from "../../services/typeCar.service";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import '../../css/product.css';

const ListProduct = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { state, dispatch } = useContext(UserContext);
  const [movie, setMovie] = useState([]);
  const [idde, setIdde] = useState(0);

  const getType = async () => {
    dispatch({ type: "SHOW_LOADING" });

    const movie = await get();
    setMovie(movie);
    console.log(movie);
    dispatch({ type: "HIDE_LOADING" });
  };

  useEffect(() => {
    getType();
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Box m="20px">
          <div className="container shadow" style={{ display: "grid" }}>
            <h1 style={{ margin: "auto", marginTop: "24px" }}>MOVIE / CHANNEL</h1>
            <Link to={"/create-product"} style={{ margin: "24px 0" }}>
              <button className="btn btn-success">
                Create New Movie
              </button>
            </Link>

            <table className="table">
              <thead>
                <th>STT</th>
                <th>Thumbnail</th>
                <th>Name</th>
                <th style={{width:'30%'}}>Description</th>
                <th>Category</th>
                <th>Actor</th>
              </thead>
              <tbody>
                {movie.map((e, k) => {
                  return (
                    <tr key={k}>
                      <td>{k + 1}</td>
                      <td>
                        {/* <img crossorigin="anonymous" src={"https://appserviceccc.azurewebsites.net" + e.thumbnail}
                         width={80} height={120} borderRadius={8} style={{objectFit:'cover'}}
                         /> */}
                         <video width="80" height="120" controls>
        <source src={"https://appserviceccc.azurewebsites.net" + e.thumbnail} type="video/mp4"/>
    </video>
                      </td>

                      <td >{e.name}</td>
                      <td className="descr">{e.description}</td>
                      <td >{e.category}</td>

                      <td >{e.actor}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Box>
      </main>
    </div>
  );
};

export default ListProduct;
