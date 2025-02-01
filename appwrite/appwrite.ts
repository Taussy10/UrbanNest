import {Account, Avatars, Client, Databases, OAuthProvider, Query, Storage} from "react-native-appwrite"
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

  // Databases.listDocuments(databaseId: string, collectionId: string, queries?: string[]): Promise
  // so it takes call back funciton which returns promise 
  // so if returns promise then make it async await function then 
  // get it by await 
  // by the way by this 

// for getting Recommendation properties
export const getLatestProperties = async() => {
    try {
      const response = await databases.listDocuments(
        config.databaseId!,
        config.propertiesCollectionId!,
        [Query.orderAsc("$createdAt"), Query.limit(4)]
      )

      return response.documents;

    } catch (error) {
      console.log(error);
      // means we can't fetch anything
      return[]
      
      
    }
  }

// accepting three props
type getPropertiesTypes = {
  filter: string
  query: string,
  limit?: number
}


// For getting all props & filtering searching etc 
  export const getProperties = async({filter, query ,limit}:getPropertiesTypes) => {

    try {
      // build query variable stores 
 const buildQuery = [Query.orderDesc("$createdAt")]

if (filter && filter !== "All") {
  buildQuery.push(Query.equal('type', filter))
  
}

if (query) {

  buildQuery.push(
    Query.or(
      [
        Query.search('name', query),
        Query.search('address', query),
        Query.search('type', query)
      ]
    )
  )
}

if (limit) {

  buildQuery.push(Query.limit(limit))
}

      const response = await databases.listDocuments(
        config.databaseId!,
        config.propertiesCollectionId!,
        buildQuery
      )

      console.log("response from appwrite.ts",response);
      return response.documents;
      
    } catch (error) {
      console.log(error);
      // means we can't fetch anything
      return[]
      
      
    }
  }

  // getDocument(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Models.Document>


  // How will I know that I need to use async await ?
  // Hover on databases.listDocuments and know what it returns:
  // It takes callback function and returs Promise that means it is async 
  //  Databases.listDocuments(databaseId,collectionId, queries?): Promise<Models.DocumentList<Models.Document>>
  // So to handle promise you have two ways: 
  // 1. .catch() , .then()
  // 2. async await 
// both are good method but use async await mostly 

// Btw resolved(to resolve you  have to use async await/try catch) promise wil give two things: https://appwrite.io/docs/references/cloud/models/documentList 
// 1. total(number of docs) and docments(list of docs) in array form 
// Btw appwrite doesnt' send total by defaut so you have to response.total
// and by default it sends response 

  export const testing = async() => {
    try {
      const response = await databases.listDocuments(
        config.databaseId!,
        config.propertiesCollectionId!,
      )

    
      // if you want to use the value from an asynchronous function like 
      // getProperties, you need to return the result. This is how promises work 
      // in test.tsx
    return response.documents
    
    } catch (error) {
      console.log(error);
      throw new Error(error.message)
    }
  }

  export const yo = () => {
        // If a variable is inside a function, you cannot directly access it 
        // from outside the function unless you return it but why ?
      // cause it's defined under this function scope 
      // so if you want to use varialbe outside of scope then you have only one method
      // 1. Return it: so whenever function executes return statement will also get 

      // by default function returns undefined
      // return some statement kills the function
      const response = " YO dude"
        return response
        // also one more thing: basically function call always have return value yo() = response 
        // so , you can store it by: const h = yo()
    
  }

  
    