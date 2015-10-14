Meteor.publish("tasks", function(){
	return Tasks.find();
});

Meteor.publish("categories", function(){
	return Categories.find();
});