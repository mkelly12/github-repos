var gh = gh || {};
gh.AppView = Backbone.View.extend({

  tagName: "div",

  className: "app-view",

  events: {
    'submit [data-api-key-form]': 'submitApiKeyForm'
  },

  initialize: function() {
    this.repoCollection = new gh.RepoCollection;
    this.$el.on('submit', '[data-repo-form]', this.submitRepoForm.bind(this));
    this.error = false;
    gh.settings.access_token = Cookies.get('access_token');
  },
  
  render: function() {
    var view = this;
    
    view.$el.html(view.template({
      errorMessage: view.errorMessage,
      access_token: gh.settings.access_token
    }));
    
    view.repoCollection.each(function (repo) {
      var repoView = new gh.RepoView({model: repo});
      view.$('[data-repos]').append(repoView.render().el);
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
      } else if (response.status === 401) {
        view.errorMessage = 'Invalid API key';
      } else if (response.status === 403 && !gh.settings.access_token) {
        view.errorMessage = 'Hourly requests exceeded. Try setting an API key.';
      } else {
        view.errorMessage = 'Something went wrong with the GitHub API, email Matt (mkelly12@gmail.com)';
      }
      view.render();
      
      view.$el.removeClass('loading');
    }
    
    view.repoCollection.fetch(view.$('[data-repo-name-input]').val(), success, error);
  },
  
  submitApiKeyForm: function (event) {
    var view = this;
    
    event.preventDefault();
    
    gh.settings.access_token = view.$('[data-api-key-input]').val();
    Cookies.set('access_token', gh.settings.access_token);
    
    view.$('[data-save-api-key-button]').html('Saved!');
    
    setTimeout(function () {
      view.$('[data-save-api-key-button]').html('Save API Key');
    }, 2000);
  },
  
  template: _.template($('#app-template').html())

});