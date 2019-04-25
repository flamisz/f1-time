export function getResults (circuit_id, results) {
    fetch(`https://ergast.com/api/f1/current/circuits/${circuit_id}/results.json`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            if (myJson && !! myJson.MRData.RaceTable.Races.length) {
                results(null, myJson.MRData.RaceTable.Races[0].Results)
            } else {
                results(null, null)
            }
        })
        .catch(error => results(new Error(error)));
}
