import {Text, TouchableOpacity, View} from 'react-native'
import Application from '../layout/application'
import { useContext } from 'react'
import context from '../context/maincontext'

const Error = () => {
    const {setError}=useContext(context)
  return (
    <Application>
        <Text>Error</Text>
        <TouchableOpacity onPress={()=>{setError("error page")}}><Text>Go Back</Text></TouchableOpacity>
    </Application>
  )
}

export default Error