// ((): void => {
// require([
//     'backbone',
//     'jquery',
//     'underscore'
// ], function(Backbone, $, _) {
	let AllGroupsView: any = Backbone.View.extend({
		el: $('#all-groups-template'),

		template: _.template($('#member-groups-template').html()),

		events: {
			'click .user-group-choices li': 'appendGroup',
		},

		initialize: function() {

			this.groups = this.getAllGroups();

		},

		cleanup: function() {
			this.undelegateEvents();

			$(this.el).append(this.el);
		},

		render: function(fillInput) {

			$(this.el).html(this.template({
				groups: this.groups
			}));

			$(this.el).append(this.el);

			if (fillInput) {
				$(this.el).children().children().val(fillInput);
			}

			return this;
		},

		appendGroup: function(e) {
			let contains: string = $(this.el).children().children().val();
			if (contains.length === 0) {
				$(this.el).children().children().val(e.target.innerHTML);
			}
			else {
				$(this.el).children().children().val($(this.el).children().children().val() + ',' + e.target.innerHTML)
			}

			for (var i = 0; i < this.groups.length; ++i) {
				if (this.groups[i] === e.target.innerHTML) {
					this.groups.splice(i, 1);
				}
			}

			this.render($(this.el).children().children().val());
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