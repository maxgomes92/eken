function toggleTextEl(id) {
  const el = document.getElementById(id);

  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}