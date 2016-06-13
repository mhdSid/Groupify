// ((): void => {
	let GroupViewModel: any = Backbone.Model.extend({

		defaults: {
			"type": "group",
			"name": "group name",
			"users": []
		},

		destroy: function(gname) {
			try {
				localStorage.removeItem(gname);
			} catch (e) { }
		},

		getUsers: function(gname) {

			let users: any = [];
			try {
				if (localStorage.getItem(gname)) {
					let length: number = JSON.parse(localStorage.getItem(gname)).users.length;

					if (length > 0) {
						for (var i = 0; i < length; ++i) {
							let name: string = JSON.parse(localStorage.getItem(gname)).users[i];
							users.push(JSON.parse(localStorage.getItem(name)));
						}
					}
					return users;

				} else {
					return false;
				}
			} catch (e) { }

		}
	});
// })();