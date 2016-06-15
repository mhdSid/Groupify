// ((): void => {
// require([
//     'backbone',
//     'jquery',
//     '/development/user/user.viewModel.js',
//     '/development/user/userGroups.view.js',
//     '/development/user/userListingGroupChoices.view.js'
// ], function(Backbone, $, UserViewModel, UserGroupsListing, GroupChoices) {
var oldChoicess;
var oldGroupss;
var UserView = Backbone.View.extend({
    el: $('#user-page'),
    events: {
        'click .nt-belong': 'removeGroupFromUser',
        'click .user-delete': 'deleteUser'
    },
    initialize: function (uname) {
        if (oldChoicess) {
            oldChoicess.cleanup();
            oldChoicess.undelegateEvents();
        }
        if (oldGroupss) {
            oldGroupss.cleanup();
            oldGroupss.undelegateEvents();
        }
        this.uname = uname;
        this.model = new UserViewModel({ uname: uname });
        this.groups = this.model.getGroups(uname);
        this.list = new UserGroupsListing(this.groups, uname);
        this.list.render();
        this.choices = new GroupChoices(uname, this.list);
        this.choices.render(uname);
        oldChoicess = this.choices;
        oldGroupss = this.list;
    },
    cleanup: function () {
        this.undelegateEvents();
        $(this.el).append(this.el);
    },
    removeGroupFromUser: function (e) {
        oldChoicess.cleanup();
        oldChoicess.undelegateEvents();
        oldGroupss.cleanup();
        oldGroupss.undelegateEvents();
        var newmodel = new UpdateSection({ type: 'user', name: this.uname });
        var user = JSON.parse(localStorage.getItem(this.uname));
        var group = JSON.parse(localStorage.getItem(e.target.parentElement.children[1].innerHTML));
        newmodel.removeUserFromGroup(group, this.uname);
        newmodel.removeGroupFromUser(user, e.target.parentElement.children[1].innerHTML);
        this.groups = this.model.getGroups(this.uname);
        this.render();
        this.list = new UserGroupsListing(this.groups, this.uname);
        this.list.render(true);
        this.choices = new GroupChoices(this.uname, this.list);
        this.choices.render(true);
        oldChoicess = this.choices;
        oldGroupss = this.list;
    },
    deleteUser: function (e) {
        this.model.destroy(this.uname);
        Backbone.history.navigate("/adduser", true);
    }
});
//});
// })(); 
