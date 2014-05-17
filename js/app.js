$(document).ready(function() {
  var population = new DailyPopulationCollection();

  var population_table = new StatsTableView({
    el: $("#poblacion-diaria .stats"),
    collection: population,
    template: $('#population-table-template').html(),
  });

  var population_chart = new DailyPopulationChartView({
    el: $("#poblacion-diaria .chart"),
    collection: population,
    base_height: 320,
    //breakpoints: {
         //width->height multiplier
        //"768": 1
    //},
  });

  population.fetch();
});
