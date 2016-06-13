// ((): void => {
	let oldChoices: any;
	let oldUsers: any;

	let GroupView: any = Backbone.View.extend({
		el: $('#group-page'),

		events: {
			'click .remove-member': 'removeUserFromGroup',
			'click .group-delete': 'deleteGroup'
		},

		initialize: function(gname) {

			if (oldChoices) {
				oldChoices.cleanup();
				oldChoices.undelegateEvents();
			}

			if (oldUsers) {
				oldUsers.cleanup();
				oldUsers.undelegateEvents();
			}
			this.gname = gname;
			this.model = new GroupViewModel({ gname: gname });
			this.users = this.model.getUsers(gname);

			this.list = new GroupMembersListing(this.users, gname);
			this.list.render();

			this.choices = new UserChoices(gname, this.list);
			this.choices.render();

			oldChoices = this.choices;
			oldUsers = this.list;
		},

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		removeUserFromGroup: function(e) {
			oldChoices.cleanup();
			oldChoices.undelegateEvents();

			oldUsers.cleanup();
			oldUsers.undelegateEvents();

			let newmodel: any = new UpdateSection({ type: 'group', name: this.gname });
			let group: any = JSON.parse(localStorage.getItem(this.gname));
			let user: any = JSON.parse(localStorage.getItem(e.target.parentElement.children[1].innerHTML));

			newmodel.removeUserFromGroup(group, e.target.parentElement.children[1].innerHTML);
			newmodel.removeGroupFromUser(user, this.gname);

			this.users = this.model.getUsers(this.gname);
			this.render();

			this.list = new GroupMembersListing(this.users, this.gname);
			this.list.render(true);

			this.choices = new UserChoices(this.gname, this.list);
			this.choices.render();

			oldChoices = this.choices;
			oldUsers = this.list;
		},

		deleteGroup: function(e) {
			this.model.destroy(this.gname);
			Backbone.history.navigate("/addgroup", true);
		}
	});
// })();