import bcrypt from 'bcrypt';
export const decrypt=async(password,hash)=>{
    const comp=await bcrypt.compare(password,hash)
    return comp;
}