import api from "./api";

export const get = async ()=>{
    try{
     const url = "manage-provider/getall";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "manage/stream-provider/getone/:id";
        const rs = await api.get(url,{id});
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const create_brand = async(brand) =>{
    const url = "manage-provider/create"
    try{
        const rs = await api.post(url,{name: brand.name,description: brand.description, packages: brand.packages, thumbnail:brand.thumbnail});
        alert("Create Success");
        return rs.data;
    }catch(error){
        alert("Create Fail");
        return {};
    }
}
export const edit_brand = async(brand) =>{
    const url = "brands"
    try{
        const rs = await api.put(url,{id:brand.id, name: brand.name,description: brand.description, thumbnail:brand.thumbnail});
        alert("Edit brand car thanh cong");
        return {};
    }catch(error){
        alert("Edit brand that bai");
        return {};
    }
}
export const remove_brand = async (idde)=>{
    try{
        const url = "brands?id="+idde;
        const rs = await api.delete(url);
        alert("Delete thanh cong");
        return {};
    }catch(error){
        alert("Delete that bai");
        return {};
    }

}
