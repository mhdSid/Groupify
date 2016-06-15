// ((): void => {
// require([
//     'backbone'
// ], function(Backbone) {
var UserViewModel = Backbone.Model.extend({
    defaults: {
        "type": "user",
        "name": "user name",
        "email": "user email",
        "imgSrc": "imgSrc",
        "color": 'color',
        "groups": []
    },
    destroy: function (uname) {
        try {
            localStorage.removeItem(uname);
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
