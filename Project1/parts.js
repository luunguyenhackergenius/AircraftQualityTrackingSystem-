let parts = JSON.parse(localStorage.getItem("parts")) || [];

const partForm = document.getElementById("partForm");
const partsTableBody = document.getElementById("partsTableBody");

if (partForm) {
  partForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const part = {
      partNumber: document.getElementById("partNumber").value,
      serialNumber: document.getElementById("serialNumber").value,
      description: document.getElementById("description").value,
      status: document.getElementById("status").value
    };

    parts.push(part);
    localStorage.setItem("parts", JSON.stringify(parts));

    partForm.reset();
    displayParts();
  });
}

function displayParts() {
  if (!partsTableBody) return;

  partsTableBody.innerHTML = "";

  parts.forEach(function (part) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${part.partNumber}</td>
      <td>${part.serialNumber}</td>
      <td>${part.description}</td>
      <td>${part.status}</td>
    `;

    partsTableBody.appendChild(row);
  });
}

function updateDashboard() {
  const totalParts = document.getElementById("totalParts");
  const acceptedParts = document.getElementById("acceptedParts");
  const reworkParts = document.getElementById("reworkParts");
  const rejectedParts = document.getElementById("rejectedParts");

  if (!totalParts) return;

  totalParts.textContent = parts.length;
  acceptedParts.textContent = parts.filter(p => p.status === "Accepted").length;
  reworkParts.textContent = parts.filter(p => p.status === "Rework").length;
  rejectedParts.textContent = parts.filter(p => p.status === "Rejected").length;
}

displayParts();
updateDashboard();