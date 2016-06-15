// ((): void => {
// require([
// 	'backbone',
//     'jquery',
//     'underscore',
//     '/development/group/group.viewModel.js'
// ], function(Backbone, $, _, GroupViewModel) {
	let GroupMembersListing: any = Backbone.View.extend({

		el: $('#group-current-members'),

		template: _.template($('#group-current-members-template').html()),

		initialize: function(data, gname) {

			this.gname = gname;
			this.users = data;
		},

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		render: function(updated) {
			if (updated) {
				this.model = new GroupViewModel({ gname: this.gname });
				this.users = this.model.getUsers(this.gname);
			}

			$(this.el).html(this.template({
				users: this.users,//(this.users[0] === null) ? empty : this.users
				gname: this.gname
			}));

			$(this.el).append(this.el);
		}
	});
//});
// })();