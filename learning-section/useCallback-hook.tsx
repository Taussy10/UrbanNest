
import { useCallback, useState  , useEffect} from "react";
import { Button, SafeAreaView, Text } from "react-native";

const Hello = () => {
  const [count, setCount] = useState(0);
 
    const handleClick = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);
//  
// Agar tumhara function kisi useEffect ya React.memo ke dependency array mein ho, tab useCallback ka use zaruri hai. Kyunki agar function ka reference change hota hai, to React ko lagta hai ke kuch change hua hai aur wo re-render trigger kar leta hai.
// by useEffect component renders itself sowhenever useEffect run component renders

  useEffect(() => {
    
     handleClicks()
  }, [])
  useEffect(() => {
    handleClick()
  }, [])
  const handleClicks = () => {
    setCount(count + 1)
   }

 
  console.log("Component Rendered!");

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Button title="Click Me" onPress={handleClick} />
      <Button title="no call back" onPress={handleClicks} />
      <Text>Count: {count}</Text>
    </SafeAreaView>
  );
};

export default Hello;

