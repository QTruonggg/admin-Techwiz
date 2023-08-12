import api from "./api";
export const get = async ()=>{
    try{
     const url = "contracts";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }

 export const tinhtong = async ()=>{
     try{
         const url = "contracts/total";
         const rs = await api.get(url);
         return rs.data;
     }catch(error){
         return 0;
     }
 }

 export const find = async(id)=>{
    try {
        const url = "contracts/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
 }

 export const edit_contract = async(con) =>{

    const url = "contracts"
    try{
        const rs = await api.put(url,{id:con.id ,numberContract:con.numberContract,name:con.name,address:con.address,email:con.email,tel:con.tel,thumbnail:con.thumbnail,cccd:con.cccd,status:con.status,contents:con.contents,ngaykyhopdong:con.ngaykyhopdong,ngaythue:con.ngaythue,ngaytra:con.ngaytra,giatrihopdong:con.giatrihopdong,giatridatcoc:con.giatridatcoc,carsId:con.carsId,usersId:con.usersId});
        alert("Edit contract thanh cong");
        return rs.data;
    }catch(error){
        alert("Edit contract that bai");
        return {};
    }
 }

 export const tong_month = async () =>{
     const url ="contracts/totalmonth";
     try{
        const rs = await api.get(url);
        return rs.data;
    }catch(error){
        return [];
    }
 }

 export const getagree = async ()=>{
     try{
         const url = "contracts/getcontract1";
         const rs = await api.get(url);
         return rs.data;

     }catch(error){
        return [];
    }
 }
 export const getdisagree = async ()=>{
    try{
        const url = "contracts/getcontract3";
        const rs = await api.get(url);
        return rs.data;

    }catch(error){
       return [];
   }
}


 export const getcontractpayment= async ()=>{
    try{
        const url = "contracts/getcontract2";
        const rs = await api.get(url);
        return rs.data;

    }catch(error){
       return [];
   }
}