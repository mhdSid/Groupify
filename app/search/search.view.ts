// ((): void => {
// require([
//     'jquery',
//     'underscore',
//     'backbone',
//     '/development/search/search.model.js',
//     '/development/search/searchList.view.js'
// ], function($, _, Backbone, SearchModel, SearchList) {
let SearchView: any = Backbone.View.extend({

    el: $('.nav-search'),

    events: {
        'change input': 'search',
        'click input': 'showView',
        'click button': 'toggleSidebar'
        },

        initialize: function() {
            this.SearchModel = new SearchModel();
            this.data = this.SearchModel.getData();
            this.render();
        },

        search: function(e) {
            console.log(e)
            if (e.target.value.length > 0) {
                this.SearchModel.set(e.target.value);
                this.data = this.SearchModel.getData();
                this.searchList = new SearchList(this.data);
                this.searchList.render();
            }
        },

        showView: function(e) {
            Backbone.history.navigate("/search", true);
        },
        toggleSidebar: function(e) {
            $('.sidebar').removeClass('hide');
        }
    });
//});
// })();