function openmodal(img) {
  const modal =
    document.getElementById("modal");
  const modalImg =
    document.getElementById("modalImage");

  modal.style.display = "flex";
  modalImage.src = img.src;
}

funciton closeModal(){
document.getElementById("modal").style.display = "none";
}
