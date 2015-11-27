import Backbone from 'backbone';
import todos from '../models/todos';

// Todo Router
// ----------
var TodoRouter = Backbone.Router.extend({
	routes: {
		'*filter': 'setFilter'
	},

	setFilter: function (param) {
		// Set the current filter to be used
		this.todoFilter = param || '';

		// Trigger a collection filter event, causing hiding/unhiding
		// of Todo view items
		todos.trigger('filter');
	},

  getFilter() {
    return this.todoFilter;
  }
});

var router = new TodoRouter();
Backbone.history.start();

export default router;
