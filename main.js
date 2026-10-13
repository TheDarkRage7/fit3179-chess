vegaEmbed("#practice-chart", "lichess_growth.vg.json", {
  actions: true
}).catch(function (error) {
  document.getElementById("practice-chart").textContent =
    "The chart could not load. Check the browser console.";

  console.error(error);
});
vegaEmbed("#grandmasters-map", "grandmasters_map.vg.json", {
  actions: true
}).catch(function (error) {
  document.getElementById("grandmasters-map").textContent =
    "The map could not load. Check the browser console.";

  console.error(error);
});
vegaEmbed(
  "#participation-map",
  "chess_participation_map.vg.json",
  { actions: true }
).catch(function (error) {
  document.getElementById("participation-map").textContent =
    "The map could not load. Check the browser console.";

  console.error(error);
});