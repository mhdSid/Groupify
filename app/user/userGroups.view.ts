// ((): void => {
	let UserGroupsListing: any = Backbone.View.extend({

		el: $('#user-belongs-list'),

		template: _.template($('#user-belongs-list-template').html()),

		initialize: function(data, uname) {

			this.groups = data;
			this.uname = uname;
		},

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		render: function(updated) {
			if (updated) {

				this.model = new UserViewModel({ uname: this.uname });
				this.groups = this.model.getGroups(this.uname);
			}

			$(this.el).html(this.template({
				groups: this.groups,
				uname: this.uname
			}));

			$(this.el).append(this.el);
		}
	});
// })();