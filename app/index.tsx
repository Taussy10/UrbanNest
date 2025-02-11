import { Alert, Button, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '~/constants/images';
import icons from '~/constants/icons';
import { Redirect, useRouter } from 'expo-router';
import { createUser } from '~/appwrite/appwrite';
import { useAuthContext } from '~/context/auth-context';

type contextTypes = {
  loggedIn: boolean;
  user: boolean;
  loading: boolean;
};

const Onboarding = () => {
  const router = useRouter();

  const { user, loggedIn, loading } = useAuthContext();

  //  && loading && !loading
  if (user !== null && loggedIn) {
    // it's a component so we have to put either inside jsx or
    // return it
    return <Redirect href={'/home'} />;
  }
  console.log(user, loggedIn);

  const Login = async () => {
    const response = await createUser();

    if (response) {
      router.replace('/home');
    } else {
      Alert.alert('Error', 'Not authorize');
    }
    try {
      // await createUser()
      router.replace('/home');
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <SafeAreaView className=" flex-1 bg-white">
      <StatusBar barStyle={"light-content"}/>
      {/* Always add ScrollView for each screen if user devices small then they can scroll */}
      <ScrollView
        contentContainerClassName="h-full"
        // it's for that content takes full devices
      >
        {/* so this screen has two mainGroups: Images and Texts */}
        {/* Image container although only one elment */}
        {/* <View className='  flex- mb-6 '> */}
        <Image
          source={images.onboarding}
          // crop the Image from bottom later
          className=" h-4/6 w-full  "
        />
        {/* </View> */}

        {/* for texts container */}
        <View className="    flex-1 items-center ">
          {/* look what are the props he uses for text */}
          <Text className=" mb-2 text-center font-rubik   text-base text-black-200">
            WELCOME TO UrbanNest
          </Text>
          {/* {"\n"} is new line character that moves to new line  */}
          <Text className=" mb-10  text-center font-rubik-bold  text-2xl  ">
            Let's Get You Closer to {'\n'}
            <Text className=" text-primary-300 ">Your Ideal Home</Text>
          </Text>

          <Text className=" text-center    font-rubik text-lg text-black-200">
            Login to Real Scout with Google
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            // i've disabled the button so that no one clicks it if loggedIn = true then disable it
            disabled={loggedIn}
            className="  h-12 w-[85%]  items-center justify-center  rounded-full bg-white   p-3  shadow-lg shadow-zinc-400"
            onPress={Login}>
            {/* for cenering icns and text */}
            <View className=" flex-row items-center justify-center gap-3">
              <Image source={icons.google} className=" size-7" />
              <Text className=" font-rubik-medium text-lg  text-black-300 ">
                Sign Up with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding;
