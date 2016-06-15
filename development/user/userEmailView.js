// ((): void => {
// require([
//     'backbone',
//     'jquery',
// ], function(Backbone, $) {
var UserEmailView = Backbone.View.extend({
    el: $('input[name="user-email"]'),
    initialize: function () {
        this.render();
    },
    render: function () {
        $(this.el).val('');
        return this;
    }
});
//});
// })(); 
