function openmodal(img) {
  const modal =
    document.getElementById("modal");
  const mainlImage =
    document.getElementById("mainImage");

  mainImage.src = img.src;
  modal.style.display = "flex";
}

funciton closemodal() {
  const modal =
document.getElementById("modal");
  modal.style.display = "none";
}
