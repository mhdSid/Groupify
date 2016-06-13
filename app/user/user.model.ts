// ((): void => {
	let User: any = Backbone.Model.extend({

		defaults: {
			"type": "user",
			"name": "user name",
			"email": "user email",
			"imgSrc": "imgSrc",
			"color": 'color',
			"groups": []
		},

		initialize: function() {
			this.attributes.color = this.getColor();
		},

		saveLocal: function() {

			try {
				localStorage.setItem(this.attributes.name, JSON.stringify(this.attributes));
			} catch (e) {
				return e;
			}
		},

		getColor: function() {
			let letters: any = '0123456789ABCDEF'.split('');
			let color: string = '#';
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		},

		validate: function() {
			if (!this.fetchLocal(this.attributes.name)) {
				this.saveLocal();
				this.updateGroupUsers(this.attributes.groups, this.attributes.name);
				return true;
			}
			else {
				return false;
			}
		},

		fetchLocal: function(nameId) {
			try {
				if (localStorage.getItem(nameId)) {
					return JSON.parse(localStorage.getItem(nameId));
				} else {
					return false;
				}
			} catch (e) { }
		},

		updateGroupUsers: function(groups, uname) {
			try {
				for (var i = 0; i < groups.length; ++i) {
					var newGroup = {
						"type": "group",
						"name": "group name",
						"users": []
					};

					var group = JSON.parse(localStorage.getItem(groups[i]));

					newGroup.name = group.name;

					newGroup.users = group.users;

					newGroup.users.push(uname);

					localStorage.removeItem(newGroup.name);

					localStorage.setItem(newGroup.name, JSON.stringify(newGroup));

				}
			} catch (e) { }
		}
	});
// })();