import axios from 'axios';

import navbar from "../component/navbar.js";
   
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' '); // for loaddash.
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res)
            console.log('hello world')
        });
  //to save anychange run command npx webpack.
  //webpack is optimizing our cose for browser.
    
document.body.innerHTML = navbar();
 