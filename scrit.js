function openImage(img) {
  const main =
    document.getElementById("mainImage");
  main.src = img.src;
  main.style.display = "block";
}
