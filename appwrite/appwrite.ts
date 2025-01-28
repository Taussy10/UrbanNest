import {Account, Avatars, Client, Databases, OAuthProvider, Storage} from "react-native-appwrite"
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from "expo-web-browser";
import { Alert } from "react-native";

const client = new Client()
const account = new Account(client)
export const databases = new Databases(client)
const avatar = new Avatars(client)
const storage = new Storage(client)

export const config = {
    platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
    
}

client
.setEndpoint(config.endpoint!)
.setProject(config.projectId!)
.setPlatform(config.platform!)


export const createUser = async () => {
    // export const createUser = async ( ) => {
    try {
      //  
    //   it will redirect back to index screen
      const redirectUri =  Linking.createURL("/");

    // why create0Auth2Token ? cause it gives the sucess and failure args 
    // that will be use to redirect back to app after authentication: 
    // https://appwrite.io/docs/references/cloud/client-web/account#createOAuth2Token
      const response = await account.createOAuth2Token(
        OAuthProvider.Google,
        // if success back to the app
        redirectUri
      );

      if (!response) throw new Error("Failed to login response");
    //   we have wrote the logic redirect URL(so that it can back to app)& Auth

    // Now we have to open brwoser

      //  it will open browser in application and takes three things
      // 1. url: url of page(basically google's login page that will be
      // get by response)
      // 2. The url to deep link back into your app.
      const browserResult = await openAuthSessionAsync(
        response.toString(),
        redirectUri
      );
  
      if (browserResult.type !== "success")
        throw new Error("Failed to login browser");
      const url = new URL(browserResult.url);
      console.log("URL", url);
      // // exp://192.168.1.5:8081/--/#"
  
      console.log("browserResult", browserResult.type, browserResult.url);
      console.log("redirectURI", redirectUri);
      console.log("response", response);
      console.log("browserResult", browserResult);
  
      const secret = url.searchParams.get("secret")?.toString();
      const userId = url.searchParams.get("userId")?.toString();
      console.log("secret", secret);
      console.log("userId", userId);
      if (!secret || !userId) throw new Error("Failed to login secret ");
  
      const session = await account.createSession(userId, secret);

      
      
      if (!session) throw new Error("Failed to create session session");

    
      return session;
    } catch (error: any) {
      console.log("createUser: ", error);
      throw new Error(error);
    }
  };

 


  export const Logout = async() => {
    try {
    const logoutUser = await account.deleteSession("current") 
    console.log(logoutUser);
    return logoutUser
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
        
    }

  }



  // just a function for getting current user 
// by the way you can get current user by "await account.get()"
// but you have to look for other things also 
// such async await(because takes time to come) , try catch(what if no data)
// that's why created a function 

  export const getCurrentUser = async() => {
    try {
        
    // if you have problem of writing variables then use "response"
    const currentUser = await account.get() 
    console.log(currentUser);

    // checking the user current user exist
    if (currentUser.$id) {
   const userAvatar = avatar.getInitials(currentUser.name)
 
   return {
    ...currentUser,
    avatar: userAvatar.toString()
   }
    }

    } catch (error) {
        console.log(error);
        throw new Error(error.message)
        
    }

  }