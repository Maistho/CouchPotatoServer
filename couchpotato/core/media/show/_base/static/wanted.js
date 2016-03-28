var ShowsWanted = new Class({

	Extends: PageBase,

	order: 10,
	name: 'wanted',
	title: 'List of TV Shows subscribed to',
	folder_browser: null,

	indexAction: function(){
		var self = this;

		if(!self.list){

			// Wanted shows
			self.list = new ShowList({
				'identifier': 'wanted',
				'status': 'active',
				'type': 'show',
				'actions': [MA.IMDB, MA.Trailer, MA.Release, MA.Refresh, MA.Readd, MA.Delete],
				'add_new': true,
				'on_empty_element': App.createUserscriptButtons().addClass('empty_wanted')
			});
			$(self.list).inject(self.content);
		}

	}

});

var ShowsManage = new Class({
	Extends: PageBase,
	order: 20,
	name: 'manage',
	title: 'Do stuff to your existing shows!',
})
