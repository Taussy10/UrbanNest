import { Button, SafeAreaView } from "react-native";
import React, { useState, useRef } from "react";

const Hello = () => {
  const [count, setCount] = useState(0);

  // step-1
  // we declare a function
  // stores in memory and ref created
  const handleClick = () => {
    console.log("Hello");
    
  };

  // Step-2
  // When component mounts 
  // Varaible , function gets intiaize and will give ref value
  // that's on mounted it will give undefined
  // console.log("mount:", handleClick());



  // // Step-2: new function for updating state
  // When component updates
  // Varaible , function gets update and render 
  const increaseCount = () => {
setCount(count+1)  
console.log(count);
  
  };


  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      {/* Best for performance  */}
      <Button title="Click me" onPress={handleClick}  />
      {/* Use only if arguments pass karne hain */}
      <Button title="Click me" onPress={()=> handleClick()}  />
      <Button  title="Increas Count" onPress={() =>increaseCount()}  />
    </SafeAreaView>
  );
};

export default Hello;
