// ((): void => {
	let SearchView: any = Backbone.View.extend({

		el: $('.nav-search'),

		events: {
			'change input': 'search',
			'click input': 'showView'
		},

		initialize: function() {
			this.render();
		},

		search: function(e) {
			if (e.target.value.length > 0) {
				this.searchList = new SearchList(e.target.value);
				this.searchList.render();
			}
		},

		showView: function(e) {

			Backbone.history.navigate("/search", true);
		}
	});
// })();