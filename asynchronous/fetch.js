//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FETCH~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// fetch is used to send and recieve data through api   ----    provides interface for fetching
// uses request and response objects


//fetch using asyc await

let url = 'https://dev.whenisthenextmcufilm.com/api'   //assign url

let letsfetch = async () =>{  //created a async function for fetch
   
    let response = await fetch(url)  //after url if we didnt mention any thing then its GET by default
    console.log(typeof response);//returns object === response from the api is mostly a JSON --to convert into we use .json()
     const data =  await response.json()//since its asynchronous we add await here
     console.log(data)
       console.log(data.following_production.overview)
       console.log('id : ', data.following_production.id);
       let img1url = data.following_production.poster_url
       let img2url = data.poster_url
       const imgf = document.querySelector('.img1')
       imgf.setAttribute('src', img1url)
       const imgS= document.querySelector('.img2')
       imgS.setAttribute('src', img2url)
}

letsfetch()

// fetch using promise chaining

// function fet () {
//   fetch('https://dev.whenisthenextmcufilm.com/api').then((response)=>{
//     console.log(response)
//     return response.json()
//   })
//     .then((data)=>{
//       console.log(data)
//       console.log(data.following_production.days_until)
//     })
//     .catch((error)=>{
//          console.log(error)
//     })
//     .finally(()=>{
//       console.log(`this will run`)
//     })
// }
// fet()

