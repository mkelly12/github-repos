var gh = gh || {};
gh.AppView = Backbone.View.extend({

  tagName: "div",

  className: "app-view",

  events: {
  },

  initialize: function() {
    this.repoCollection = new gh.RepoCollection;
    this.$el.on('submit', this.submitRepoForm.bind(this));
    this.error = false;
  },
  
  render: function() {
    var view = this;
    
    view.$el.html(view.template({errorMessage: view.errorMessage}));
    
    view.repoCollection.each(function (repo) {
      var repoView = new gh.RepoView({model: repo});
      view.$el.append(repoView.render().el);
    });

    return view;
  },
  
  submitRepoForm: function (event) {
    var view = this,
        success,
        error;
        
    event.preventDefault();
    
    view.$el.addClass('loading');
    
    success = function () {
      if (view.repoCollection.length === 0) {
        view.errorMessage = 'No public repos in that organization';
        view.render();
      } else {
        view.errorMessage = '';
        view.render();
        view.$('[data-repo-name-input]')[0].focus(); // Let people keep entering new repos quickly
      }
      
      view.$el.removeClass('loading');
    };
    
    error = function (response) {
      if (response.status === 404) {
        view.errorMessage = 'Could not find that repo';
      } else {
        view.errorMessage = 'Something went wrong with the GitHub API, email Matt (mkelly12@gmail.com)';
      }
      view.render();
      
      view.$el.removeClass('loading');
    }
    
    view.repoCollection.fetch(view.$('[data-repo-name-input]').val(), success, error);
  },
  
  template: _.template($('#app-template').html())

});