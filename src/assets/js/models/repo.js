var gh = gh || {};
gh.Repo = Backbone.Model.extend({
  fetchCommits: function (success) {
    var data = {
      per_page: gh.settings.commits_loaded
    };
    if (gh.settings.access_token) {
      data.access_token = gh.settings.access_token;
    }
    access_token: gh.settings.access_token
    $.ajax('https://api.github.com/repos/' + this.get('owner').login + '/' + this.get('name') + '/commits', {
      data: data,
      success: function (data) {
        this.set('commits', data);
        success();
      }.bind(this)
    });
  }
});