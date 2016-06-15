// ((): void => {
// require([
//     'backbone',
//     'jquery',
//     '/development/user/allGroups.view.js',
//     '/development/user/userName.view.js',
//     '/development/user/userEmail.view.js'
// ], function(Backbone, $, AllGroupsView, UserNameView, UserEmailView) {
	let oldGroupsView: any;
	let AddUserView: any = Backbone.View.extend({

		el: $('#adduser-page'),

		events: {
			'click .btn-createUser': 'createUser',
			'change input': 'changed'
		},

		initialize: function() { //new SidebarUsersView();

			if (oldGroupsView) {
				oldGroupsView.cleanup();
				oldGroupsView.undelegateEvents();
			}

			this.allGroupsView = new AllGroupsView();
			this.userNameView = new UserNameView();
			this.userEmailView = new UserEmailView();
			this.allGroupsView.render();
			this.userNameView.render();
			this.userEmailView.render();

			//this.sidebarUsersView = sidebarUsersView;
			oldGroupsView = this.allGroupsView;
		},

		render: function() {
			this.initialize();
		},

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		createUser: function(e) {

			let newuser: any = {
				name: '',
				email: '',
				imgSrc: '',
				color: '',
				groups: []
			};

			newuser.name = $('input[name="user-name"]').val();

			if (newuser.name.length > 1) {

				newuser.email = $('input[name="user-email"]').val();

				if (newuser.email.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {

					newuser.groups = ($("input[name='user-groups']").val().length) ? $("input[name='user-groups']").val().split(',') : undefined;

					if (newuser.groups) {
						this.model = new User({ name: newuser.name, email: newuser.email, imgSrc: newuser.imgSrc, color: newuser.color, groups: newuser.groups });

						let isValid: boolean = this.model.validate();

						if (isValid) {
							this.allGroupsView.undelegateEvents();
							this.render();
							//this.sidebarUsersView.render(true);
						}
						else {
							this.showError('user-name');
						}
					} else {
						this.showError('user-groups');
					}

				}
				else {
					this.showError('user-email');
				}
			}
			else {
				this.showError('user-name');
			}
		},

		changed: function(e) {
			if (e.target.name === 'group-name' || e.target.name === 'user-name') {
				try {
					if (localStorage.getItem(e.target.value)) {
						this.showError(e.target.name);
						return false;
					} else {
						return true;
					}
				} catch (e) { }
			}
		},

		showError: function(name) {
			$('input[name="' + name + '"]').addClass("error");
			setTimeout(function() {
				$('input[name="' + name + '"]').removeClass("error");
			}, 2000);
		}
	});
//});
// })();