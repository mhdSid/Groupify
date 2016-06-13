// ((): void => {
	let uname: string;
	let gname: string;
	let old: any;

	let ApplicationView = Backbone.View.extend({

		el: $('body'),

		events: {
			'click .groupify': 'displayMain',
			'click .display-user': 'displayUser',
			'click .display-group': 'displayGroup',
			'click .user-adder': 'displayAddUser',
			'click .group-adder': 'displayAddGroup'
		},

		initialize: function() {
			this.delegateEvents();
			//set dependency on ApplicationRouter
			this.router = new ApplicationRouter();

			//call to begin monitoring uri and route changes
			Backbone.history.start();

			this.sidebarGroupsView = new SidebarGroupsView();
			this.sidebarUsersView = new SidebarUsersView();

			this.sidebarGroupsView.render();
			this.sidebarUsersView.render();
		},

		displayMain: function(e) {
			this.router.navigate("main", { trigger: true, replace: true });
		},

		displayUser: function(e) { //uname
			e.preventDefault();
			e.stopPropagation();

			if (old) {
				old.cleanup();
				old.undelegateEvents();
			}

			uname = e.currentTarget.id;
			this.router.navigate("user/" + uname, { trigger: true, replace: true });
			let newuserview: any = new UserView(uname);

			old = newuserview;
		},

		displayGroup: function(e) { //gname
			e.preventDefault();
			e.stopPropagation();

			if (old) {
				old.cleanup();
				old.undelegateEvents();
			}

			gname = e.currentTarget.innerHTML
			this.router.navigate("group/" + gname, { trigger: true, replace: true });
			let newgroupview: any = new GroupView(gname);

			old = newgroupview;
		},

		displayAddUser: function(e) {
			e.preventDefault();
			e.stopPropagation();

			if (old) {
				old.cleanup();
				old.undelegateEvents();
			}

			this.router.navigate("adduser", { trigger: true, replace: true });
			let newAdduserView: any = new AddUserView(); //pass this.sidebarUsersView
			old = newAdduserView;
		},

		displayAddGroup: function(e) {
			e.preventDefault();
			e.stopPropagation();

			if (old) {
				old.cleanup();
				old.undelegateEvents();
			}

			this.router.navigate("addgroup", { trigger: true, replace: true });
			let newAddgroupView: any = new AddGroupView(); //pass this.sidebarUsersView
			old = newAddgroupView;
		}
	});

	$(() => {
		//load application

		new ApplicationView();

		new SearchView();
	});
// })();