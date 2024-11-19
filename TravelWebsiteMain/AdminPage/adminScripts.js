document.addEventListener("DOMContentLoaded", function () {
  // Modal
  var modal = document.getElementById("modal");
  var span = document.getElementsByClassName("close-button")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

function addPackage() {
  var table = document.getElementById("packageTable");
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  var descCell = row.insertCell(1);
  var priceCell = row.insertCell(2);
  var statusCell = row.insertCell(3);
  var actionCell = row.insertCell(4);

  nameCell.innerHTML = document.getElementById("packageName").value;
  descCell.innerHTML = document.getElementById("packageDesc").value;
  priceCell.innerHTML = document.getElementById("packagePrice").value;
  statusCell.innerHTML = document.getElementById("packageStatus").value;
  actionCell.innerHTML = "<button onclick='deleteRow(this)'>Delete</button>";

  // Clear the form
  document.getElementById("packageForm").reset();
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function updateSettings() {
  alert("Settings have been updated.");
}

// Add your own JavaScript functions as needed.
