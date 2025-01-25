import {Account, Avatars, Client, Databases, OAuthProvider, Storage} from "react-native-appwrite"
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from "expo-web-browser";

const client = new Client()
const account = new Account(client)
const database = new Databases(client)
const avatar = new Avatars(client)
const storage = new Storage(client)

export const config = {
    platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    
}

client
.setEndpoint(config.endpoint!)
.setProject(config.projectId!)
.setPlatform(config.platform!)


export const createUser = async () => {
    // export const createUser = async ( ) => {
    try {
      //  it will move
      const redirectUri =  Linking.createURL("/");
      const response = await account.createOAuth2Token(
        OAuthProvider.Google,
        redirectUri
        // write here for failure
      );
      if (!response) throw new Error("Failed to login response");
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
  
      //   Get the user Details
      console.log("Session", session);
  
      if (!session) throw new Error("Failed to create session session");
      return session;
    } catch (error: any) {
      console.log("createUser: ", error);
      throw new Error(error);
    }
  };
