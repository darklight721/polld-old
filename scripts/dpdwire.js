angular.module('dpdwire', []).factory('Polls', function(){
	return {
		get: function(id, callback) {
			if (id)
				dpd.polls.get(id, callback);
			else
				dpd.polls.get(callback);
		},
		post: function(data, callback) {
			dpd.polls.post(JSON.parse(data), callback);
		}
	}
});