// ((): void => {
	let SidebarGroupsView: any = Backbone.View.extend({
		el: $('.sidebar-groups-template'),

		template: _.template($('#sidebar-groups-template').html()),

		initialize: function() {

			this.model = new SidebarModel();

			this.sidebarGroups = this.model.getAllGroups();
		},

		render: function(updated) {

			if (updated) {

				this.model = new SidebarModel();
				this.sidebarGroups = this.model.getAllGroups();
			}

			$(this.el).html(this.template({
				sidebarGroups: this.sidebarGroups
			}));

			$(this.el).append(this.el);
		}
	});
// })();