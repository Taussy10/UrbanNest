import {Account, Avatars, Client, Databases, Storage} from "react-native-appwrite"


const client = new Client()
const account = new Account(client)
const database = new Databases(client)
const avatar = new Avatars(client)
const storage = new Storage(client)

client
.setEndpoint()
.setProject()
.setPlatform()