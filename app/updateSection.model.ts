// ((): void => {
	let UpdateSection: any = Backbone.Model.extend({

		defaults: {
			"type": "",
			"name": ""
		},

		initialize: function() { },

		getAllGroupUsers: function(gname) {
			try {
				let users: any = [];
				for (var i = 0; i < localStorage.length; i++) {
					let data: any = JSON.parse(localStorage.getItem(localStorage.key(i)));
					if (data.type === 'user') {
						let currentGroups: any = data.groups;

						let is: boolean = false;

						inner:
						for (var j = 0; j < currentGroups.length; j++) {
							if (currentGroups[j] === gname) {
								is = true;
								break inner;
							}
						}

						if (!is) {
							users.push(data.name)
						}
					}
				}

				return users;
			} catch (e) { }
		},

		getAllUserGroups: function(uname) {
			try {
				let groups: any = [];
				for (var i = 0; i < localStorage.length; i++) {
					let data: any = JSON.parse(localStorage.getItem(localStorage.key(i)));
					if (data.type === 'group') {
						let users: any = data.users;

						let is: boolean = false;

						inner:
						for (var j = 0; j < users.length; j++) {
							if (users[j] === uname) {
								is = true;
								break inner;
							}
						}

						if (!is) {
							groups.push(data.name)
						}
					}
				}

				return groups;
			} catch (e) { }
		},

	    updateUserGroups: function(user, gname) {
			try {
				var userWithNewGroup = {
					"type": "user",
					"name": "user name",
					"email": "user email",
					"imgSrc": "imgSrc",
					"color": 'color',
					"groups": []
				};

				var u = JSON.parse(localStorage.getItem(user.name));

				userWithNewGroup.name = u.name;
				userWithNewGroup.email = u.email;
				userWithNewGroup.imgSrc = u.imgSrc;
				userWithNewGroup.color = u.color;

				userWithNewGroup.groups = u.groups;

				userWithNewGroup.groups.push(gname);

				localStorage.removeItem(userWithNewGroup.name);
				localStorage.setItem(userWithNewGroup.name, JSON.stringify(userWithNewGroup));

			} catch (e) { }
	    },

		updateGroupUsers: function(group, uname) {
			try {
				var newGroup = {
					"type": "group",
					"name": "group name",
					"users": []
				};

				var g = JSON.parse(localStorage.getItem(group.name));

				newGroup.name = g.name;

				newGroup.users = g.users;

				newGroup.users.push(uname);

				localStorage.removeItem(newGroup.name);
				localStorage.setItem(newGroup.name, JSON.stringify(newGroup));


			} catch (e) { }

	    },

		removeUserFromGroup: function(group, uname) {
			try {
				var newGroup = {
					"type": "group",
					"name": "group name",
					"users": []
				};

				var g = JSON.parse(localStorage.getItem(group.name));

				newGroup.name = g.name;

				var index = g.users.indexOf(uname);

				g.users.splice(index, 1);
				newGroup.users = g.users;

				localStorage.removeItem(newGroup.name);
				localStorage.setItem(newGroup.name, JSON.stringify(newGroup));


			} catch (e) { }

	    },

		removeGroupFromUser: function(user, gname) {
			try {
				var userWithNewGroup = {
					"type": "user",
					"name": "user name",
					"email": "user email",
					"imgSrc": "imgSrc",
					"color": 'color',
					"groups": []
				};

				var u = JSON.parse(localStorage.getItem(user.name));

				userWithNewGroup.name = u.name;
				userWithNewGroup.email = u.email;
				userWithNewGroup.imgSrc = u.imgSrc;
				userWithNewGroup.color = u.color;

				var index = u.groups.indexOf(gname);

				u.groups.splice(index, 1);
				userWithNewGroup.groups = u.groups;

				localStorage.removeItem(userWithNewGroup.name);
				localStorage.setItem(userWithNewGroup.name, JSON.stringify(userWithNewGroup));

			} catch (e) { }
	    }
	});
// })();