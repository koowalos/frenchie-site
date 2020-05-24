var image1 = document.getElementById("kongo1");

image1.addEventListener("mouseover", function (event) {
  image1.src = "./assets/images/kongo-carrotrun.jpg";
});
image1.addEventListener("mouseout", function (event) {
  image1.src = "./assets/images/kongo-carrot.jpg";
});
