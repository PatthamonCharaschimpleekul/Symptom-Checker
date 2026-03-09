let dataset = {};

//download dataset from Json file
fetch("data/symptom_data.json")
    .then(response => response.json())
    .then(data => {
        dataset = data;
    });

document.getElementsById("symptomForm").addEventListener("submit", function(e) {
    e.preventDefault();

//retrieving symptoms selected by the user
const selectedSymptoms = Array.from(
    document.querySelectorAll("input[type=checkbox] : checked")
).map(cb = cb.value);

const results = [];

//compare dataset
for(const condition in dataset){
    const conditionSymptoms = dataset[condition].symptom || dataset[condition].symptoms;

    let matchCount = 0;

    selectedSymptoms.forEach(symptom => {
        if (conditionSymptoms.includes(symptom)){
            matchCount++;
        }
    });

    const score = matchCount/conditionSymptoms.lenght;

    results.push({
        condition : condition,
        score : score,
        description : dataset[condition].description
    });
}
//arrange the scores from hightest to lowest
    results.sort((a,b) => b.score - a.score);
    displayResults(results.slice(0,3));
});