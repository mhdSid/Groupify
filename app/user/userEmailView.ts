// ((): void => {
	let UserEmailView: any = Backbone.View.extend({

		el: $('input[name="user-email"]'),

		initialize: function() {

			this.render();
		},

		render: function() {

			$(this.el).val('');

	        return this;
		}
	});
// })();