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
vegaEmbed(
  "#olympiad-hosts-map",
  "olympiad_hosts_map.vg.json",
  { actions: true }
).catch(function (error) {
  document.getElementById("olympiad-hosts-map").textContent =
    "The map could not load. Check the browser console.";

  console.error(error);
});
vegaEmbed(
  "#rating-histogram",
  "fide_rating_histogram_hover.vg.json",
  { actions: true }
).catch(error => {
  document.querySelector("#rating-histogram").textContent =
    "The rating chart could not be loaded.";
  console.error(error);
});
vegaEmbed(
  "#rating-boxplots",
  "fide_rating_boxplots.vg.json",
  { actions: true }
).catch(error => {
  document.querySelector("#rating-boxplots").textContent =
    "The rating comparison could not be loaded.";
  console.error(error);
});
vegaEmbed(
  "#rating-heatmap",
  "fide_rating_heatmap.vg.json",
  { actions: true }
).catch(error => {
  document.querySelector("#rating-heatmap").textContent =
    "The rating heatmap could not be loaded.";
  console.error(error);
});