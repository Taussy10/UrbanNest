// So , there was a time when websites use create in just two files
// but as time proceed we have create many files to create a big webiste
//  so , there was need to split codes

// for example we have two files: product and users
// and we want to use it in index.js
// so how ?

// Named export
import { users } from "./users.js ";
// Default export
import products from "./products.js";

console.log(products);

console.log(users);
