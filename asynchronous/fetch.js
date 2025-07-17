//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FETCH~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// fetch is used to send and recieve data through api   ----    provides interface for fetching
// uses request and response objects



let url = 'https://dev.whenisthenextmcufilm.com/api'   //assign url

let letsfetch = async () =>{  //created a async function for fetch
   
    let response = await fetch(url)  //after url if we didnt mention any thing then its GET by default
    // console.log(typeof response);//returns object === response from the api is mostly a JSON --to convert into we use .json()
     const data = response// await response.json()//since its asynchronous we add await here
     console.log(data)
       console.log(data.status)
       console.log(data.url);
       
}

