var gh = gh || {};
gh.Repo = Backbone.Model.extend({
  fetchCommits: function (success) {
    $.ajax('https://api.github.com/repos/' + this.get('owner').login + '/' + this.get('name') + '/commits', {
      data: {
        per_page: gh.settings.commits_loaded,
        access_token: gh.settings.access_token
      },
      success: function (data) {
        this.set('commits', data);
        success();
      }.bind(this)
    });
  }
});