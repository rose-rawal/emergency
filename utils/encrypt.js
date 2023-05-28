import bcrypt from 'bcrypt';
export const encrypt=async(password,saltRound=11)=>{
    const salt=await bcrypt.genSalt(saltRound);
    const enc=await bcrypt.hash(password,salt)
    return enc;
}