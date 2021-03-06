// ((): void => {
// require([
//     'jquery',
//     'backbone',
//     'app.routes',
//     '/development/sidebar/sidebarGroups.view.js',
//     '/development/sidebar/sidebarUsers.view.js'
// ], function($, Backbone, ApplicationRouter, SidebarGroupsView, SidebarUsersView) {

	let sidebarGroupsView: any;
	let sidebarUsersView: any; 
	let ApplicationView = Backbone.View.extend({

		el: $('body'),

		events: {
			'click .groupify': 'displayMain',
			'click .display-user': 'displayUser',
			'click .display-group': 'displayGroup',
			'click .user-adder': 'displayAddUser',
			'click .group-adder': 'displayAddGroup',
			'click .hide-sidebar-btn': 'toggleSidebar'
		},

		initialize: function() {
			this.delegateEvents();
			this.router = new ApplicationRouter();
			Backbone.history.start();

			sidebarGroupsView = new SidebarGroupsView();
			sidebarUsersView = new SidebarUsersView();

			sidebarGroupsView.render();
			sidebarUsersView.render();

			//console.log(this.sidebarUsersView)
		},

		displayMain: function(e) {
			this.router.navigate("main", { trigger: true, replace: true });
		},

		displayUser: function(e) {
			if (this.old) {
				this.old.cleanup();
				this.old.undelegateEvents();
			}
			this.uname = e.currentTarget.id;
			this.router.navigate("user/" + this.uname, { trigger: true, replace: true });
			let newuserview: any = new UserView(this.uname);
			this.old = newuserview;
		},

		displayGroup: function(e) { 
			if (this.old) {
				this.old.cleanup();
				this.old.undelegateEvents();
			}

			this.gname = e.currentTarget.innerHTML
			this.router.navigate("group/" + this.gname, { trigger: true, replace: true });
			let newgroupview: any = new GroupView(this.gname);
			this.old = newgroupview;
		},

		displayAddUser: function(e) {
			if (this.old) {
				this.old.cleanup();
				this.old.undelegateEvents();
			}
			this.router.navigate("adduser", { trigger: true, replace: true });
			let newAdduserView: any = new AddUserView(); //pass this.sidebarUsersView
			this.old = newAdduserView;
		},

		displayAddGroup: function(e) {
			if (this.old) {
				this.old.cleanup();
				this.old.undelegateEvents();
			}
			this.router.navigate("addgroup", { trigger: true, replace: true });
			let newAddgroupView: any = new AddGroupView(); //pass this.sidebarUsersView
			this.old = newAddgroupView;
		},
		toggleSidebar: function(e) {
            $('.sidebar').addClass('hide');
        }
	});

	$(() => {
		//load application

		new ApplicationView();

		new SearchView();
	});
//});
// })();