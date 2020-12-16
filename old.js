const baseUrl = 'https://picsum.photos/v2/list?page=6&limit=20'
//const picFromPicsum = json;

fetch(baseUrl)
  .then(function(result){
    return result.json()
  })
  .then(function(json) {
    console.log(json);
    displayResults(json);
  })

function displayResults(json) {
json.forEach(object => {
  createElement(divVar)
  createElement(imgVar)


imgVar.src = object.download_url;
divVar.setAttribute("carousel-item", "2000")

queryVar.appendChild(divVar);
divVar.appendChild(imgVar)
})}



// function displayResults(json){
//   let imageOne = json.results[0].image;
//   let imageTwo = json.results[1].image;
//   document.getElementById("imageOne").src=imageOne;
//   document.getElementById("imageTwo").src=imageTwo;
// }
