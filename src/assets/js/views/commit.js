var gh = gh || {};
gh.CommitView = Backbone.View.extend({

  tagName: "div",

  className: "commit row",

  events: {
  },

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  template: _.template($('#commit-template').html())
});