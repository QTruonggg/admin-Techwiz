import api from "./api";

export const get = async ()=>{
    try{
     const url = "typecars";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "typecars/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const create_typeCar = async(typeCar) =>{
    const url = "typecars"
    try{
        const rs = await api.post(url,{name: typeCar.name,description: typeCar.description});
        alert("Tao type of car thanh cong");
        return rs.data;
    }catch(error){
        alert("Tao type of car that bai");
        return {};
    }
}
export const edit_typeCar = async(typeCar) =>{
    const url = "typecars"
    try{
        const rs = await api.put(url,{id:typeCar.id, name: typeCar.name,description: typeCar.description});
        alert("Edit type of car thanh cong");
        return {};
    }catch(error){
        alert("Edit type of car that bai");
        return {};
    }
}
export const remove_typeCar = async (idde)=>{
    try{
        const url = "typecars?id="+idde;
        const rs = await api.delete(url);
        alert("Delete thanh cong");
        return {};
    }catch(error){
        alert("Delete that bai");
        return {};
    }

}

export const get_type = async ()=>{
    try{
     const url = "typecars";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }

 export const find_type = async (id)=>{
    try {
        const url = "typecars/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
 }