// ((): void => {
	let UserViewModel: any = Backbone.Model.extend({

		defaults: {
			"type": "user",
			"name": "user name",
			"email": "user email",
			"imgSrc": "imgSrc",
			"color": 'color',
			"groups": []
		},

		destroy: function(uname) {
			try {
				localStorage.removeItem(uname);
			} catch (e) { }
		},

		getGroups: function(uname) {
			let userGroups: any = [];
			try {
				if (localStorage.getItem(uname)) {
					let length: number = JSON.parse(localStorage.getItem(uname)).groups.length;

					if (length > 0) {
						for (var i = 0; i < length; ++i) {
							userGroups.push(JSON.parse(localStorage.getItem(uname)).groups[i]);
						}
					}
					return userGroups;
				} else {
					return false;
				}
			} catch (e) { }
		}
	});
// })();