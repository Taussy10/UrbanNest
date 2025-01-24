import { View, TextInput, Image } from 'react-native';
import {useState} from 'react';
import icons from '~/constants/icons'; // Ensure icons.search and icons.filter are correctly imported

const Search = () => {
  const [input, setInput] = useState("")
  console.log("INputvalues" ,input);
  
  return (
    // Main container
    <View className="mb-5 flex-row items-center justify-between rounded-lg bg-[#FBFBFD] p-2 ">
      {/* Left container: Icon and TextInput */}
      <View className="flex-row items-center gap-2 flex-1">
        <Image source={icons.search} resizeMode="contain" className="w-5 h-5" />
        <TextInput
          placeholder="Search something"
          placeholderTextColor="#8C8E98"
          className="flex-1 text-sm text-black"
          value={input}
          onChangeText={(value:any) => setInput(value)}
          
        />
      </View>

      {/* Right container: Filter icon */}
      <View>
        <Image source={icons.filter} className="w-7 h-7" />
      </View>
    </View>
  );
};

export default Search;
