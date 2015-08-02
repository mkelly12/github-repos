var gh = gh || {};
gh.RepoView = Backbone.View.extend({

  tagName: "div",

  className: "repo",

  events: {
    'click [data-show-commits]': 'clickShowCommits',
    'click [data-hide-commits]': 'clickHideCommits'
  },

  initialize: function() {
  },

  render: function() {
    var view = this;
    view.$el.html(this.template(this.model.attributes));
    
    _.each(view.model.get('commits'), function (commit) {
      var commit = new gh.Commit(commit);
      var commitView = new gh.CommitView({model: commit});
      view.$('[data-show-all]').before(commitView.render().el);
    });
    
    return this;
  },
  
  template: _.template($('#repo-template').html()),
  
  clickShowCommits: function (event) {
    var view = this;
    
    event.preventDefault();
    
    view.model.fetchCommits(function () {
      view.render();
      view.$el.addClass('showing-comments');
    });
  },
  
  clickHideCommits: function (event) {
    var view = this;
    
    event.preventDefault();
    
    view.$el.removeClass('showing-comments');
  }

});