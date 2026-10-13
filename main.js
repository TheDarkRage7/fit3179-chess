vegaEmbed("#practice-chart", "lichess_growth.vg.json", {
  actions: true
}).catch(function (error) {
  document.getElementById("practice-chart").textContent =
    "The chart could not load. Check the browser console.";

  console.error(error);
});