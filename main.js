const charts = [
  ["practice-chart", "lichess_growth.vg.json"],
  ["grandmasters-map", "grandmasters_map.vg.json"],
  ["participation-map", "chess_participation_map.vg.json"],
  ["rating-histogram", "fide_rating_histogram_hover.vg.json"],
  ["rating-boxplots", "fide_rating_boxplots.vg.json"],
  ["rating-heatmap", "fide_rating_heatmap.vg.json"],
  ["opening-treemap", "opening_treemap.vg.json"],
  ["opening-bump-chart", "opening_bump_chart.vg.json"],
  ["opening-sankey", "opening_moves_sankey.vg.json"],
  ["olympiad-hosts-map", "olympiad_hosts_map.vg.json"],
  ["australia-olympiad-slope", "australia_olympiad_slope.vg.json"]
];

async function loadChart(id, filename) {
  const container = document.getElementById(id);

  if (!container) {
    console.error(`Missing chart container: ${id}`);
    return;
  }

  container.textContent = "Loading chart…";

  try {
    await vegaEmbed(`#${id}`, filename, {
      actions: true,
      renderer: "svg"
    });
  } catch (error) {
    container.textContent =
      "This chart could not be loaded. Please refresh the page.";

    console.error(`Could not load ${filename}:`, error);
  }
}

charts.forEach(([id, filename]) => {
  loadChart(id, filename);
});