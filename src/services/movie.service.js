import api from "./api";

export const get = async ()=>{
    try{
     const url = "manage-product/get";
     const rs = await api.get(url);
     return rs.data.data.product  ;
    }catch(error){
        return [];
    }
 }
 


export const create_movie = async(movie) =>{
    const url = "manage-product/create"
    try{
        const rs = await api.post(url,{name: movie.name,description: movie.description, providers: movie.packages, thumbnail:movie.thumbnail,actor:movie.actor,category:movie.category});
        alert("Create Success");
        return rs.data;
    }catch(error){
        alert("Create Fail");
        return {};
    }
}

