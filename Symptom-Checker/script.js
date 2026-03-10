let dataset = {};

// download dataset from Json file
fetch("data/symptom_data.json")
  .then(response => response.json())
  .then(data => {
    dataset = data;
  });

document.getElementById("symptomForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // retrieving symptoms selected by the user
  const selectedSymptoms = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  ).map(cb => cb.value);

  const results = [];

  // compare dataset
  for (const condition in dataset) {

    const conditionSymptoms = dataset[condition].symptom || dataset[condition].symptoms;

    let matchCount = 0;

    selectedSymptoms.forEach(symptom => {
      if (conditionSymptoms.includes(symptom)) {
        matchCount++;
      }
    });

    const score = matchCount / conditionSymptoms.length;

    results.push({
      condition: condition,
      score: score,
      description: dataset[condition].description
    });
  }

  // arrange the scores from highest to lowest
  results.sort((a,b) => b.score - a.score);

  displayResults(results.slice(0,3));
});

// display function

function displayResults(results) {

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  results.forEach(r => {

    const percent = Math.round(r.score * 100);

    const item = document.createElement("div");

    item.innerHTML = `
      <h3>${r.condition}</h3>
      <p>Match: ${percent}%</p>
      <p>${r.description}</p>
    `;

    resultDiv.appendChild(item);

  });
}