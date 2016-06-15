// ((): void => {
// require([
//     'backbone',
//     'jquery',
//     '/development/sidebar/sidebar.model.js',
//     'underscore'
// ], function(Backbone, $, SidebarModel, _) {
var SidebarUsersView = Backbone.View.extend({
    el: $('.sidebar-users-template'),
    template: _.template($('#sidebar-users-template').html()),
    initialize: function () {
        this.sidebarUsers = this.getAllUsers();
        this.model = new SidebarModel(this.sidebarUsers);
        console.log(this);
    },
    render: function (updated) {
        if (updated) {
            //this.model = new SidebarModel();
            this.model.attributes = this.getAllUsers();
        }
        $(this.el).html(this.template({
            sidebarUsers: this.model.attributes
        }));
        $(this.el).append(this.el);
    },
    getAllUsers: function () {
        try {
            var users = [];
            for (var i = 0; i < localStorage.length; i++) {
                var user = {
                    name: '',
                    color: ''
                };
                if (JSON.parse(localStorage.getItem(localStorage.key(i))).type === 'user') {
                    user.name = JSON.parse(localStorage.getItem(localStorage.key(i))).name;
                    user.color = JSON.parse(localStorage.getItem(localStorage.key(i))).color;
                    users.push(user);
                }
            }
            return users;
        }
        catch (e) { }
    }
});
//});
// })(); 
