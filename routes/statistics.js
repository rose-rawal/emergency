import { Router } from "express";
import statisticsSchema from '../models/statisticsSchema.js'

const statsRoute =  Router();

const statisticsStore = async (req,res)=>{

const {name,email,address,phone,affectedArea} = req.body;
console.log("dbbb",affectedArea);
const store = statisticsSchema({
name, email, address, phone, affectedArea    
})

await store.save();
return res.json({
success: true,
message:"A record entered",

})
}

statsRoute.post('/storeStatistics',statisticsStore);

const getAllStatistics=async(req,res)=>{
 try{
  const aggregationResult = await statisticsSchema.aggregate([
    {
      $group: {
        _id: '$affectedArea',
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    }
  ]);


  res.json(aggregationResult);
} catch (error) {
  console.error('Error occurred in getting all stats:', error);
  res.status(500).json({ error: 'An error occurred in getting all stats' });
}
}
statsRoute.get('/all',getAllStatistics);

const getStatistics=async(req,res)=>{
  const area=req.params.id;
  // console.log()
  const user=await statisticsSchema.find({
      affectedArea:area
  })
  res.json({
      count: user.length
  })
}

statsRoute.get('/all/:id',getStatistics);


const statisticsDel = async(req,res)=>{

    try {
        // Use the Mongoose model to delete all records
        const result = await statisticsSchema.deleteMany({});
        
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'No records found' });
        }
    
        return res.json({ message: 'All records deleted successfully' });
      } catch (err) {
        console.error('Error deleting records:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }
}

statsRoute.delete('/deleteStatistics',statisticsDel);
export default statsRoute;
