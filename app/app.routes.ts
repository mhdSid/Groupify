// ((): void => {
	let ApplicationRouter: any = Backbone.Router.extend({

		routes: {
			"user/:uname": "user",
			"group/:gname": "group",
			"adduser": "adduser",
			"addgroup": "addgroup",
			"search": "search",
			"main": "main",
			"": "main"
		},

		hidePages: function() {
			//hide all pages with 'pages' class
			$('div.pages').hide();
		},

		showPage: function(page) {
			//hide all pages
			this.hidePages();
			//show passed page by selector
			$(page).show();
		},

		main: function() {
			this.showPage('div#main-page');
		},

		user: function(uname) {
			this.showPage('div#user-page');
		},

		group: function(group) {
			this.showPage('div#group-page');
		},

		adduser: function() {
			this.showPage('div#adduser-page');
		},

		addgroup: function() {
			this.showPage('div#addgroup-page');
		},

		search: function() {
			this.showPage('div#search-page');
		}
	});
// })();