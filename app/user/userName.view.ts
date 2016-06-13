// ((): void => {
	let UserNameView: any = Backbone.View.extend({

		el: $('input[name="user-name"]'),

		initialize: function() {

			this.render();
		},

		render: function() {

			$(this.el).val('');

			return this;
		}

	});
// })();