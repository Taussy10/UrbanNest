
const users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Don"
    }
]

// we have exported users array from here
export {users}
//  to use this we have to get in {users}
//This method called Named export: exporting the name of array

// we can also write Named Export like this  
export const users2 = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Don"
    }
]


// // you can't export default variables  or multiple variables(object, array)
// export default const a = "Hello"
// so export them as a name Export
// export  const b = ["HEllo", "eo"]
// or
// export default b 



// but function can 
// export default function name() {
//     console.log("hello");
    
    
// }