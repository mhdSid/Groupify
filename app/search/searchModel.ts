// ((): void => {
	let SearchModel: any = Backbone.Model.extend({

		initialize: function(key) {
			this.key = key;
		},

		getData: function() {
			try {
				let data: any = [];

				for (var i = 0; i < localStorage.length; i++) {

					if (JSON.parse(localStorage.getItem(localStorage.key(i))).name.search(this.key) !== -1) {

						data.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
					}
				}
				return data;
			} catch (e) { }
		}
	});
// })();