// ((): void => {
// require([
// 	'backbone'
// ], function(Backbone) {
var Group = Backbone.Model.extend({
    defaults: {
        "type": "group",
        "name": "group name",
        "users": []
    },
    initialize: function () { },
    saveLocal: function () {
        try {
            localStorage.setItem(this.attributes.name, JSON.stringify(this.attributes));
        }
        catch (e) {
            return e;
        }
    },
    validate: function () {
        if (!this.fetchLocal(this.attributes.name)) {
            this.saveLocal();
            this.updateUserGroups(this.attributes.users, this.attributes.name);
            return true;
        }
        else {
            return false;
        }
    },
    fetchLocal: function (groupId) {
        try {
            if (localStorage.getItem(groupId)) {
                return JSON.parse(localStorage.getItem(groupId));
            }
            else {
                return false;
            }
        }
        catch (e) { }
    },
    updateUserGroups: function (users, gname) {
        try {
            for (var i = 0; i < users.length; ++i) {
                var userWithNewGroup = {
                    "type": "user",
                    "name": "user name",
                    "email": "user email",
                    "imgSrc": "imgSrc",
                    "color": 'color',
                    "groups": []
                };
                var user = JSON.parse(localStorage.getItem(users[i]));
                userWithNewGroup.name = user.name;
                userWithNewGroup.email = user.email;
                userWithNewGroup.imgSrc = user.imgSrc;
                userWithNewGroup.color = user.color;
                userWithNewGroup.groups = user.groups;
                userWithNewGroup.groups.push(gname);
                localStorage.removeItem(userWithNewGroup.name);
                localStorage.setItem(userWithNewGroup.name, JSON.stringify(userWithNewGroup));
            }
        }
        catch (e) { }
    },
    getGroups: function (uname) {
        var userGroups = [];
        try {
            if (localStorage.getItem(uname)) {
                var length_1 = JSON.parse(localStorage.getItem(uname)).groups.length;
                if (length_1 > 0) {
                    for (var i = 0; i < length_1; ++i) {
                        userGroups.push(JSON.parse(localStorage.getItem(uname)).groups[i]);
                    }
                }
                return userGroups;
            }
            else {
                return false;
            }
        }
        catch (e) { }
    }
});
//});
// })(); 
