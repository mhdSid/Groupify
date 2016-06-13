// ((): void => {
	let SearchList: any = Backbone.View.extend({
		el: $('#search-list'),

		events: {
			'click .search-list-items-listing': 'navigate'
		},

		template: _.template($('#search-list-template').html()),

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		initialize: function(key) {
			this.SearchModel = new SearchModel(key);
			this.data = this.SearchModel.getData();
		},

		render: function() {
			$(this.el).html(this.template({
				data: this.data
			}));

			$(this.el).append(this.el);
		},

		navigate: function(e) {
			console.log(e);
			// Backbone.history.navigate("/search", true);
			// Backbone.history.navigate("/search", true);
		}
	});
// })();