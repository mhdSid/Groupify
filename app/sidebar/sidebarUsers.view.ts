// ((): void => {
	let SidebarUsersView: any = Backbone.View.extend({
		el: $('.sidebar-users-template'),

		template: _.template($('#sidebar-users-template').html()),

		initialize: function() {

			this.model = new SidebarModel();

			this.sidebarUsers = this.model.getAllUsers();

		},

		render: function(updated) {

			if (updated) {

				this.model = new SidebarModel();
				this.sidebarUsers = this.model.getAllUsers();
			}

			$(this.el).html(this.template({
	            sidebarUsers: this.sidebarUsers
	        }));

			$(this.el).append(this.el);
		}
	});
// })();