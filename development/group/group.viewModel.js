// ((): void => {
// require([
// 	'backbone'
// ], function(Backbone) {
var GroupViewModel = Backbone.Model.extend({
    defaults: {
        "type": "group",
        "name": "group name",
        "users": []
    },
    destroy: function (gname) {
        try {
            localStorage.removeItem(gname);
        }
        catch (e) { }
    },
    getUsers: function (gname) {
        var users = [];
        try {
            if (localStorage.getItem(gname)) {
                var length_1 = JSON.parse(localStorage.getItem(gname)).users.length;
                if (length_1 > 0) {
                    for (var i = 0; i < length_1; ++i) {
                        var name_1 = JSON.parse(localStorage.getItem(gname)).users[i];
                        users.push(JSON.parse(localStorage.getItem(name_1)));
                    }
                }
                return users;
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
