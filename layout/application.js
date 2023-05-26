import { Text, View, TouchableOpacity } from "react-native"
import {def} from './default.js'
const Application = ({children}) => {
    
  return (
    <View>
        
        {children}
        <View>
        {def.map((n)=>{
            return(<TouchableOpacity><Text>{n.name}</Text></TouchableOpacity>)
        })}
    </View>
    </View>
  )
}

export default Application