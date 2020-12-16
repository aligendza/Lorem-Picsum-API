const baseUrl = 'https://picsum.photos/v2/list?page=5'
//const picFromPicsum = json;
let queryVar = document.querySelector(".carousel-inner")

fetch(baseUrl)
  .then(function(result){
    return result.json()
  })
  .then(function(json) {
    console.log(json);
    displayResults(json);
  })

function displayResults(json) {
  if (json.length === 0) {
    console.log('No results');
} else {
    let firstSlide = json[0].download_url;
    let divVar = document.createElement('div');
    let imgVar = document.createElement('img');
    imgVar.src = firstSlide.download_url;
    divVar.setAttribute("class", "carousel-item active");
    // divVar.setAttribute("data-interval", "2000")
    imgVar.setAttribute("class", "d-block w-100");
    queryVar.appendChild(divVar);
    divVar.appendChild(imgVar);
    for (let i = 1; i <= 29; i++) {
        console.log(i);
        let divVar2 = document.createElement('div');
        let imgVar2 = document.createElement('img');
        let nextSlide = json[i];
        imgVar2.src = nextSlide.download_url;
        //set attributes 
        divVar2.setAttribute("class", "carousel-item");
        // divVar.setAttribute("data-interval", "2000")
        imgVar2.setAttribute("class", "d-block w-100");
        queryVar.appendChild(divVar2);
        divVar2.appendChild(imgVar2);
    }
}
// json.forEach(object => {
// let divVar = document.createElement('div')
// let imgVar = document.createElement('img')


// imgVar.src = object.download_url;
// divVar.setAttribute("class", "carousel-item active")
// // divVar.setAttribute("data-interval", "2000")
// imgVar.setAttribute("class", "d-block w-100")

// queryVar.appendChild(divVar);
// divVar.appendChild(imgVar)
// })
}



// function displayResults(json){
//   let imageOne = json.results[0].image;
//   let imageTwo = json.results[1].image;
//   document.getElementById("imageOne").src=imageOne;
//   document.getElementById("imageTwo").src=imageTwo;
// }
