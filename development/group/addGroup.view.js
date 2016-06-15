// ((): void => {
// require([
// 	'backbone',
//     'jquery',
//     '/development/group/allUsers.view.js',
//     '/development/group/groupName.view.js'
// ], function(Backbone, $, AllUsersView, GroupNameView) {
var oldUsersView;
var AddGroupView = Backbone.View.extend({
    el: $('#addgroup-page'),
    events: {
        'click .btn-createGroup': 'createGroup',
        'change input': 'changed'
    },
    initialize: function () {
        if (oldUsersView) {
            oldUsersView.cleanup();
            oldUsersView.undelegateEvents();
        }
        this.allUsersView = new AllUsersView();
        this.groupNameView = new GroupNameView();
        this.allUsersView.render();
        this.groupNameView.render();
        //this.sidebarGroupsView = sidebarGroupsView;
        oldUsersView = this.allUsersView;
    },
    render: function () {
        this.initialize();
    },
    cleanup: function () {
        this.undelegateEvents();
        $(this.el).append(this.el);
    },
    createGroup: function (e) {
        var newgroup = {
            name: '',
            users: []
        };
        newgroup.name = $('input[name="group-name"]').val();
        if (newgroup.name.length > 1) {
            if ($("input[name='group-members']").length) {
                newgroup.users = ($("input[name='group-members']").val().length) ? $("input[name='group-members']").val().split(',') : undefined;
            }
            this.model = new Group({ name: newgroup.name, users: newgroup.users });
            var isValid = this.model.validate();
            if (isValid) {
                //this.sidebarGroupsView.render(true);
                this.allUsersView.undelegateEvents();
                this.render();
            }
            else {
                this.showError('group-name');
            }
        }
        else {
            this.showError('group-name');
        }
    },
    changed: function (e) {
        if (e.target.name === 'group-name' || e.target.name === 'user-name') {
            try {
                if (localStorage.getItem(e.target.value)) {
                    this.showError(e.target.name);
                    return false;
                }
                else {
                    return true;
                }
            }
            catch (e) { }
        }
    },
    showError: function (name) {
        $('input[name="' + name + '"]').addClass("error");
        setTimeout(function () {
            $('input[name="' + name + '"]').removeClass("error");
        }, 2000);
    }
});
//});
// })(); 
