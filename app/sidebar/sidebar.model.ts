// ((): void => {
	let SidebarModel: any = Backbone.Model.extend({

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
		},

		getAllUsers: function() {
			try {
				let users: any = [];

				for (var i = 0; i < localStorage.length; i++) {
					let user: any = {
						name: '',
						color: ''
					};

					if (JSON.parse(localStorage.getItem(localStorage.key(i))).type === 'user') {

						user.name = JSON.parse(localStorage.getItem(localStorage.key(i))).name;

						user.color = JSON.parse(localStorage.getItem(localStorage.key(i))).color;

						users.push(user);
					}
				}
				return users;
			} catch (e) { }
		}
	});
// })();