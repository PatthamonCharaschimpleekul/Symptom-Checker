let dataset = {};
let allSymptoms = [];

// load dataset
fetch("data/symptom_data.json")
  .then(response => response.json())
  .then(data => {
    dataset = data;

    // collect all unique symptoms
    const symptomSet = new Set();
    for (const cond in dataset) {
      const s = dataset[cond].symptom || dataset[cond].symptoms;
      s.forEach(sym => symptomSet.add(sym));
    }
    allSymptoms = Array.from(symptomSet).sort();

    renderSymptoms(allSymptoms);
  });

// render checkboxes
function renderSymptoms(symptoms) {
  const container = document.getElementById("symptomList");
  container.innerHTML = "";
  symptoms.forEach(sym => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${sym}"> ${formatSymptom(sym)}`;
    container.appendChild(label);
  });
}

// format symptom name nicely
function formatSymptom(sym) {
  return sym.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

// search filter
document.getElementById("symptomSearch").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const filtered = allSymptoms.filter(sym => sym.includes(query));
  renderSymptoms(filtered);
});

// handle form submit
document.getElementById("symptomForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const selectedSymptoms = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
    .map(cb => cb.value);

  const results = [];

  for (const condition in dataset) {
    const conditionSymptoms = dataset[condition].symptom || dataset[condition].symptoms;
    let matchCount = 0;
    selectedSymptoms.forEach(sym => {
      if (conditionSymptoms.includes(sym)) matchCount++;
    });
    const score = matchCount / conditionSymptoms.length;
    if (score > 0) {
      results.push({
        condition: condition,
        score: score,
        description: dataset[condition].description,
        matched: conditionSymptoms.filter(s => selectedSymptoms.includes(s))
      });
    }
  }

  results.sort((a,b) => b.score - a.score);
  displayResults(results.slice(0,3));
});

function displayResults(results) {
    document.getElementById("resultTitle").style.display = "block";
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

  if (results.length === 0) {
    resultDiv.innerHTML = "<p>No matching conditions found.</p>";
    return;
  }

  results.forEach(r => {
    const percent = Math.round(r.score * 100);
    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `
      <h3>${formatSymptom(r.condition)} (${percent}%)</h3>
      <p><strong>Matched symptoms:</strong> ${r.matched.map(formatSymptom).join(", ")}</p>
      <p>${r.description}</p>
    `;
    resultDiv.appendChild(item);
  });
}