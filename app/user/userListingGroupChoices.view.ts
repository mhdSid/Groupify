// ((): void => {
	let GroupChoices: any = Backbone.View.extend({
		el: $('#user-groups-list'),

		template: _.template($('#user-groups-list-template').html()),

		events: {
			'click .add-group-to-user': 'AssignUserToGroup',
		},

		initialize: function(uname, ulist) {

			this.uname = uname;

			this.model = new UpdateSection({ type: 'user', name: this.uname });

			this.groups = this.model.getAllUserGroups(this.uname);

			this.ulist = ulist;
		},

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		render: function() {
			$(this.el).html(this.template({
				groups: this.groups
			}));

			$(this.el).append(this.el);
		},

		AssignUserToGroup: function(e) {

			let group: any = JSON.parse(localStorage.getItem(e.target.innerHTML));

			let user: any = JSON.parse(localStorage.getItem(this.uname));

			this.model.updateGroupUsers(group, this.uname);

			this.model.updateUserGroups(user, e.target.innerHTML);

			this.groups = this.model.getAllUserGroups(this.uname);

			this.render();

			this.ulist.render(true);
		}
	});
// })();