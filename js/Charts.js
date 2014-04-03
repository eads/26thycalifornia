var StatsTableView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template(options.template);
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.$el.html(this.template({
      collection: this.collection
    }));
    return this;
  },
});

var DailyPopulationChartView = ChartView.extend({
  draw: function() {
    this.$el.html('¡Hola mundo!');
    return this;
  },
});
