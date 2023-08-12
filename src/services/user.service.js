import api from "./api";

export const get = async ()=>{
    try{
     const url = "manage";
     const rs = await api.get(url);
     console.log(rs.data);
     return rs.data.data.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "detailUser/:id";
        const rs = await api.get(url,{id});
        return rs.data.services;
    } catch (error) {
        return {};
    }
}


export const edit_user = async(user) =>{
    const url = "/"
    try{
        const rs = await api.put(url,{user});
        return {};
    }catch(error){
        return {};
    }
}
export const remove_car = async (idde)=>{
    try{
        const url = "cars?id="+idde;
        const rs = await api.delete(url);
        alert("Delete thanh cong");
        return {};
    }catch(error){
        alert("Delete that bai");
        return {};
    }

}