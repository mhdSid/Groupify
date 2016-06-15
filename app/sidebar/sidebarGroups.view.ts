// ((): void => {
// require([
//     'backbone',
//     'jquery',
//     '/development/sidebar/sidebar.model.js',
//     'underscore'
// ], function(Backbone, $, SidebarModel, _) {
	let SidebarGroupsView: any = Backbone.View.extend({
		el: $('.sidebar-groups-template'),

		template: _.template($('#sidebar-groups-template').html()),

		initialize: function() {

			this.sidebarGroups = this.getAllGroups();
			this.model = new SidebarModel(this.sidebarGroups);
		},

		render: function(updated) {

			if (updated) {

				//this.model = new SidebarModel();
				this.model.attributes = this.getAllGroups();
			}

			$(this.el).html(this.template({
				sidebarGroups: this.model.attributes
			}));

			$(this.el).append(this.el);
		},

		getAllGroups: function() {
			try {
				let groups: any = [];

				for (var i = 0; i < localStorage.length; i++) {

					if (JSON.parse(localStorage.getItem(localStorage.key(i))).type === 'group') {

						groups.push(JSON.parse(localStorage.getItem(localStorage.key(i))).name);
					}
				}
				return groups;
			} catch (e) { }
		}
	});
//});
// })();