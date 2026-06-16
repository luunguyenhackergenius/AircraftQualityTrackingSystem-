// ── Data ────────────────────────────────────────────────────────────────────
let parts       = JSON.parse(localStorage.getItem("parts"))       || [];
let inspections = JSON.parse(localStorage.getItem("inspections")) || [];

// ── Element refs ─────────────────────────────────────────────────────────────
const inspectionForm      = document.getElementById("inspectionForm");
const partSelect          = document.getElementById("partSelect");
const inspectionsTableBody = document.getElementById("inspectionsTableBody");
const successMsg          = document.getElementById("successMsg");

// ── Populate part dropdown ───────────────────────────────────────────────────
function populatePartSelect() {
  if (!partSelect) return;

  // Clear existing options except the placeholder
  partSelect.innerHTML = '<option value="">-- Select a Part --</option>';

  if (parts.length === 0) {
    const opt = document.createElement("option");
    opt.disabled = true;
    opt.textContent = "No parts added yet – go to Parts page first";
    partSelect.appendChild(opt);
    return;
  }

  parts.forEach(function (part, index) {
    const opt = document.createElement("option");
    opt.value = index;                                          // index as key
    opt.textContent = `${part.partNumber} – ${part.serialNumber} (${part.description})`;
    partSelect.appendChild(opt);
  });
}

// ── Display inspections table ────────────────────────────────────────────────
function displayInspections() {
  if (!inspectionsTableBody) return;

  inspectionsTableBody.innerHTML = "";

  if (inspections.length === 0) {
    inspectionsTableBody.innerHTML =
      '<tr><td colspan="6" class="no-parts-msg">No inspections logged yet.</td></tr>';
    return;
  }

  // Show newest first
  const sorted = [...inspections].reverse();

  sorted.forEach(function (insp) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${insp.partNumber}</td>
      <td>${insp.serialNumber}</td>
      <td>${insp.inspectorName}</td>
      <td><span class="badge badge-${insp.result}">${insp.result}</span></td>
      <td>${insp.date}</td>
      <td>${insp.notes || "—"}</td>
    `;
    inspectionsTableBody.appendChild(row);
  });
}

// ── Handle form submit ───────────────────────────────────────────────────────
if (inspectionForm) {
  inspectionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedIndex = document.getElementById("partSelect").value;
    if (selectedIndex === "") return;

    const selectedPart = parts[selectedIndex];

    const inspection = {
      partNumber:    selectedPart.partNumber,
      serialNumber:  selectedPart.serialNumber,
      description:   selectedPart.description,
      inspectorName: document.getElementById("inspectorName").value.trim(),
      result:        document.getElementById("result").value,
      notes:         document.getElementById("notes").value.trim(),
      date:          new Date().toLocaleDateString("en-US", {
                       year: "numeric", month: "short", day: "numeric"
                     })
    };

    inspections.push(inspection);
    localStorage.setItem("inspections", JSON.stringify(inspections));

    inspectionForm.reset();
    populatePartSelect();   // re-populate after reset clears select

    // Show success message briefly
    successMsg.style.display = "block";
    setTimeout(function () { successMsg.style.display = "none"; }, 3000);

    displayInspections();
  });
}

// ── Init ─────────────────────────────────────────────────────────────────────
populatePartSelect();
displayInspections();
