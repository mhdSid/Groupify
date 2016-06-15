// ((): void => {
// require([
// 	'backbone',
//     'jquery'
// ], function(Backbone, $) {
var GroupNameView = Backbone.View.extend({
    el: $('input[name="group-name"]'),
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
