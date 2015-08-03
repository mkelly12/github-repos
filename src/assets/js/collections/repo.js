var gh = gh || {};
gh.RepoCollection = Backbone.Collection.extend({
  
  model: gh.Repo,
  
  fetch: function (orgName, success, failure) {
    var data = {
      per_page: gh.settings.repos_loaded
    };
    
    if (gh.settings.access_token) {
      data.access_token = gh.settings.access_token;
    }
    
    $.ajax('https://api.github.com/orgs/' + orgName + '/repos', {
      data: data,
      success: function (data) {
        this.reset(data);
        success();
      }.bind(this),
      error: failure
    });
  },
  
  comparator: function (a, b) {
    if (a.get('stargazers_count') == b.get('stargazers_count')) {
      return 0;
    } else if (a.get('stargazers_count') > b.get('stargazers_count')) {
      return -1;
    } else {
      return 1;
    }
  }

  // sync: function(method, model, options) {  
  //    options || (options = {});
  // 
  //    switch (method) {
  //      case 'create':
  //      break;
  // 
  //      case 'update':
  //      break;
  // 
  //      case 'delete':
  //      break;
  // 
  //      case 'read':
  //        result = [{title: 'hello'}, {title: 'and another'}];
  //        options.success(result, true, request);
  //      break;
  //    }
  //  }

});