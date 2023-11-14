// let url = "https://kontests.net/api/v1/sites"
let url = "fet.json"
let response = fetch(url)
response.then((v)=>{
  return v.json();
}).then((contests)=>{
  console.log(contests)
  ihtml = "";
  for(item in contests){
      console.log(contests[item])
//   ihtml += ` <div class="card mx-4 w-25 my-3">
//       <img src="${contests[item][2]}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${contests[item][0]}</h5>
//         <a href="${contests[item][1]}" class="btn btn-primary">Go To Contest</a>
//       </div>
//     </div>`
    ihtml += `<div>
      <div id="box">
        <img src="${contests[item][2]}" class="imgg"><h5><a href="${contests[item][1]}"  target="_blank" class="linkk"> ${contests[item][0]}</h5></a>
      </div>
    </div>`
    }
cardcontainer.innerHTML = ihtml;
})
