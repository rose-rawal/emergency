import { View,Text, TouchableOpacity,Button } from "react-native"
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
// import { FaSymbol } from "@fortawesome/fontawesome-svg-core"
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" /> */}
const Call = () => {
  return (
    <View>
        <Text>Call</Text>
        {/* <TouchableOpacity><FontAwesomeIcon icon={FaSymbol}/></TouchableOpacity> */}
        {/* <i class="fas fa-heart"></i> */}
        {/* <Button title="hello"
          icon={<AntDesign name="google" size={24} />}/> */}
<View><Icon name="address-book" size={30} color="#900" /></View>
    </View>
  )
}

export default Call
