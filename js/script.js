/* jshint esversion: 6 */

// Get the modal
//var modal = document.getElementById("modal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    //modal.style.display = "none";
    document.getElementsByClassName('modal').style.display = 'none';
  }
};

// Open the Modal
function openModal(modal) {
  document.getElementById(`${modal}`).style.display = "block";
}

// Close the Modal
function closeModal(modal) {
  document.getElementById(`${modal}`).style.display = 'none';
}