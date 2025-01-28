import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



// This Flatlist for understanding how it works
const FlatListComponent = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <SafeAreaView>
      <FlatList
      // takes array like data structure: basically data in array
        data={data}
        //Here to learn more https://reactnative.dev/docs/flatlist#required-renderitem 

        // render items iterate over the each data 
        // item represents each data
        // render item takes e arg that has gives iterated data in array(that has some index) then renders each item when it's called that's why it's best to use it

        // {"index": 0, "item": {"id": "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", "title": "First Item"}, "separators": {"highlight": [Function highlight], "unhighlight": [Function unhighlight], "updateProps": [Function updateProps]}}
        //  {"index": 1, "item": {"id": "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", "title": "Second Item"}, "separators": {"highlight": [Function highlight], "unhighlight": [Function unhighlight], "updateProps": [Function updateProps]}}
        //  {"index": 2, "item": {"id": "58694a0f-3da1-471f-bd96-145571e29d72", "title": "Third Item"}, "separators": {"highlight": [Function highlight], "unhighlight": [Function unhighlight], "updateProps": [Function updateProps]}}

        // e are in array that's why people use index arg
        //  ((e , index: number) => string) | undefined
        keyExtractor={(index) => index.toString()}
        renderItem={(e) => {
          console.log(e);
          return (
            <View>
              {/* to get the item */}
              <Text>{e.item.title}</Text>
            </View>
          );
        }}
      />
      <Text>FlatList</Text>
    </SafeAreaView>
  );
};



// This flatlist is for how we are gonna use it in our apps 

const FlatListComponent2 = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72  ',
      title: 'Third Item',
    },
    {
      id: '587571e29d72  ',
      title: 'Fourth Item',
    },
  ];
  return (
   <FlatList 
   data={data}
  keyExtractor={(index) => index.toString()}
  // this is for creating side by side columns 
//  numColumns={2}
  // ItemSeparatorComponent?: React.ComponentType<any> | null | undefined
// need to pass React.Component basically js
// Rendered between each item(that's rendered by renderItem), but not at the top or bottom

  ItemSeparatorComponent={
    <View>
      <Text className=' font-rubik-bold text-xl'>Sperated Items</Text>
    </View>
  }
  // rendered why renderItem data == empty
  // Important thing: when list is empty then Footer and header will be shown but seprator component and rendered Items won't be shown
  ListEmptyComponent ={
    <View className='flex-row items-center justify-center h-40 w-40 rounded-lg mr-10  bg-gray-500'>
    <Text>No data fill the data first</Text>
  </View>
}

  // below the  renderItem 
  ListFooterComponent={
    <View className=' flex-row items-center justify-center h-40 w-40 rounded-lg mt-10  bg-blue-500'>
    <Text>Footer</Text>
  </View>
}

  // above the  renderItem 
  ListHeaderComponent ={
    <View className='flex-row items-center justify-center h-40 w-40 rounded-lg mt-10  bg-orange-500'>
      <Text>Header</Text>
    </View>
  }

  // Always write like this helps to console things 
   renderItem={({item, index}) => {
    //  console.log(e);
    
     return (
       <View className=' flex-row items-center justify-center h-40 w-40 rounded-lg mr-10  bg-green-500'>
         <Text>{item.title}</Text>
       </View>
     );
   }}

   />
  )
}

export default FlatListComponent2
