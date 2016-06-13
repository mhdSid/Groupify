// ((): void => {
	let AllUsersView: any = Backbone.View.extend({
		el: $('#all-users-template'),

		template: _.template($('#group-members-template').html()),

		events: {
			'click .create-group-add-member': 'appendUser',
		},

		initialize: function() {

			this.users = this.getAllUsers();
		},

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		render: function(fillInput) {

			$(this.el).html(this.template({
				users: this.users
			}));

			$(this.el).append(this.el);

			if (fillInput) {
				$(this.el).children().children().val(fillInput);
			}

			return this;
		},

		appendUser: function(e) {
			let contains: string = $(this.el).children().children().val();
			if (contains.length === 0) {
				$(this.el).children().children().val(e.target.innerHTML);
			}
			else {
				$(this.el).children().children().val($(this.el).children().children().val() + ',' + e.target.innerHTML)
			}

			for (var i = 0; i < this.users.length; ++i) {
				if (this.users[i] === e.target.innerHTML) {
					this.users.splice(i, 1);
				}
			}

			this.render($(this.el).children().children().val());
		},

		getAllUsers: function() {
			try {
				let users: any = [];

				for (var i = 0; i < localStorage.length; i++) {

					if (JSON.parse(localStorage.getItem(localStorage.key(i))).type === 'user') {

						users.push(JSON.parse(localStorage.getItem(localStorage.key(i))).name);
					}
				}
				return users;
			} catch (e) { }
		}
	});
// })();