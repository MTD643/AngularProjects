'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){
	dataService.getTodos(function(response){
		$scope.todos = response.data;
	});

	$scope.addTodo = function(){
		var todo = {name: "This is a new todo."};
		$scope.todos.unshift(todo);
	};

	$scope.deleteTodo = function(todo, i){
		dataService.deleteTodo(todo);
		$scope.todos.splice(i, 1);
	};

	$scope.saveTodos = function(){
		var filteredTodos = $scope.todos.filter(function(todo){
			if(todo.edited){
				return todo;
			};
		})
		dataService.saveTodos(filteredTodos);
	};

	$scope.learningNgChange = function(){
		console.log("An input changed!");
	};
});