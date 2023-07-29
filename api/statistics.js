import statisticsInstance from "./statisticsInstance";

export const storeStats =async ({name,address,email,phone,affectedArea})=>{
console.log("The stored stats name is",affectedArea);
    try{
        const response = await statisticsInstance.post("/storeStatistics",{
            name:name,
            address:address,
            email: email,
            phone:phone,
            affectedArea:affectedArea
       
        })
    return response.data.message;

    }
    catch(error){
        console.log("Error in stats :",error)

    }
}

export const getStats = async (area)=>{

    try{

        const response = await statisticsInstance.get(`/all/${area}`);
        const {count} = response.data;
        
        return count;
    }catch(error)
    {
        console.log("Error is in api>statistics>get",error);
    }

}

export const getAllStats = async ()=>{
    try{
const response = await statisticsInstance.get('/all');
return response.data;
    }
    catch(error){
console.log("Error at api>getAllstats",error);
    }
}

    export const delStats =async ()=>{
        console.log("The stored stats  is deleted");
            try{
                const response = await statisticsInstance.delete("/deleteStatistics");
        console.log("Response says deleted");
        
            }
            catch(error){
                console.log("Error in stats :",error)
        
            }
        

}