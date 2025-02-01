import { StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'

const Child = () => {
  const [count, setCount] = useState(0);

  const handlClick = () => {
    setCount(count+1)
  }
  // console.log("Handle Click" ,handlClick());
  
  return (
    <View>
      <Text>Child</Text>
      <Child count={count} handlClick={handlClick} />
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})