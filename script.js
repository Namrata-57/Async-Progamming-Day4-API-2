
function GET() {
  var apiurl = "https://dog.ceo/api/breeds/image/random";
  var img = document.getElementById("dog-img");
  fetch(apiurl)
    .then((res) => res.json())
    .then((data) => {
      img.src = data.message;
    }).catch((error) => {
      console.error("Error fetching dog images:", error);
    })
}