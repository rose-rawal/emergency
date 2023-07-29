import {View,Text,ScrollView,TouchableOpacity} from 'react-native'
import Application from '../../layout/application'
import { getStats } from '../../api/statistics';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useState,useContext, useEffect } from 'react';
import context from '../../context/maincontext'

const screenWidth = Dimensions.get("window").width;

const Stats = () => {

  const [no, setNo] = useState(null);
  const {backend,statData1} = useContext(context);


useEffect(()=>{
backend();
},[])
  
//   async  function  handleDelete (){
  
  
//     try{
//       let ss =statData1.map((item)=>item.count);
//       console.log("the all aggregated data =",ss);
//        const res = await getStats('Bagmati Province');
//        setNo(res);
//   console.log("The number of accidents=",statData);
// }catch(err){
//   console.error("Error occurred:", err);
// }


 
// }
const xAxis = statData1?statData1.map((item)=>item._id):['Null'];
const yAxis = statData1?statData1.map((item)=>item.count):[0];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const data = {
    labels: xAxis,
    datasets: [
      {
        data: yAxis,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Number of Catastrophes"] // optional
  };
  return (
    <Application>
       {statData1!=='undefined' ? ( <ScrollView>

      
        <LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>

<LineChart
  data={data}
  width={screenWidth}
  height={256}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>
{/* <TouchableOpacity   onPress={handleDelete}>
       <Text style={{color:'red'}}>Submit</Text>
      </TouchableOpacity>
      <Text style={{color:'red'}}>Masallle sas {no}</Text> */}
<BarChart

  data={data}
  width={screenWidth}
  height={220}
 
  chartConfig={chartConfig}

/>


          <Text>Hello Stats</Text>
          </ScrollView>): (<Text>Statistics</Text>)
}
    </Application>

  )
}

export default Stats