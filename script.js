const perfumes = {
    Spring: ["Daisy by Marc Jacobs", "Light Blue by Dolce & Gabbana", "Blossom by Jimmy Choo", "Chanel Chance Eau Tendre"],
    Summer: ["Aqua di Gioia by Giorgio Armani", "Cool Water by Davidoff", "Sun di Gioia by Giorgio Armani", "Nautica Voyage"],
    Fall: ["Hypnotic Poison by Dior", "Tom Ford Tobacco Vanille", "Yves Saint Laurent Black Opium", "Marc Jacobs Decadence"],
    Winter: ["Burberry Brit", "Viktor & Rolf Flowerbomb", "Jo Malone Wood Sage & Sea Salt", "Giorgio Armani Si"]
};

function suggestPerfume() {
    const season = document.getElementById('season-select').value;
    const suggestions = perfumes[season];
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `<h2>Suggested perfumes for ${season}:</h2>`;
    suggestions.forEach(perfume => {
        resultsDiv.innerHTML += `<p>${perfume}</p>`;
    });
}
