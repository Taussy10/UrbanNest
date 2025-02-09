import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import {useState} from 'react';
import icons from '~/constants/icons'; // Ensure icons.search and icons.filter are correctly imported
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import {useDebouncedCallback} from "use-debounce"

const Search = () => {
  const [input, setInput] = useState("")
  // Returns the currently selected route location without 
  // search parameters. For example:
  //  /acme?foo=bar returns /acme
  // https://docs.expo.dev/versions/latest/sdk/router/#usepathname
 const path = usePathname()

// https://docs.expo.dev/versions/latest/sdk/router/#uselocalsearchparams
// Returns the parameters of route that you came from 
// and that you have attach params
// acme://profile/baconbrix?extra=info params are = extra= info
 const params = useLocalSearchParams<{query?:string}>()


  const debouncedSearch = useDebouncedCallback((text: string)=> 
    router.setParams({query:text}), 500) 

  const handleSearch = (text:string) => {
    setInput(text)
    debouncedSearch(text)
  }

  // alias) function useDebouncedCallback<T extends (...args: any)
  //  => ReturnType<T>>(func: T, wait?: number, options?: Options): DebouncedState<T>



  return (
    // Main container
    <View className="mb-6  p-2 flex-row items-center justify-between rounded-lg bg-[#FBFBFD]  ">
      {/* Left container: Icon and TextInput */}
      <View className="flex-row items-center gap-2 flex-1">
        <Image source={icons.search} resizeMode="contain" className="w-5 h-5" />
        <TextInput
          placeholder="Search something"
          placeholderTextColor="#8C8E98"
          className="flex-1 text-sm text-black"
          value={input}
  
          onChangeText={handleSearch}
           
        />
      </View>

      {/* Right container: Filter icon */}
      <TouchableOpacity
      activeOpacity={0.7}
      >
        <Image source={icons.filter} className="w-7 h-7" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
