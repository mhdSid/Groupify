// ((): void => {
// require([
//     'backbone',
//     'jquery',
//     'underscore'
// ], function(Backbone, $, _) {
var SearchList = Backbone.View.extend({
    el: $('#search-list'),
    events: {
        'click .search-list-items-listing': 'navigate'
    },
    template: _.template($('#search-list-template').html()),
    cleanup: function () {
        this.undelegateEvents();
        $(this.el).append(this.el);
    },
    initialize: function (data) {
        this.data = data;
    },
    render: function () {
        $(this.el).html(this.template({
            data: this.data
        }));
        $(this.el).append(this.el);
    },
    navigate: function (e) {
        console.log(e);
    }
});
//});
// })(); 
