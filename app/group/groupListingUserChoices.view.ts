// ((): void => {
	let UserChoices: any = Backbone.View.extend({
		el: $('#group-users-list-choices'),
		template: _.template($('#group-users-list-choices-template').html()),

		events: {
			'click .add-user-to-group': 'addUserToGroup',
		},

		initialize: function(gname, glist) {

			this.gname = gname;

			this.model = new UpdateSection({ type: 'group', name: this.gname });

			this.users = this.model.getAllGroupUsers(gname);

			this.glist = glist;
		},

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		render: function() {
			$(this.el).html(this.template({
				availableUsers: this.users
			}));

			$(this.el).append(this.el);
		},

		addUserToGroup: function(e) {

			let group: any = JSON.parse(localStorage.getItem(this.gname));

			let user: any = JSON.parse(localStorage.getItem(e.target.innerHTML));

			this.model.updateGroupUsers(group, e.target.innerHTML);

			this.model.updateUserGroups(user, this.gname);

			this.users = this.model.getAllGroupUsers(this.gname);

			this.render();

			this.glist.render(true);
		}
	});
// })();