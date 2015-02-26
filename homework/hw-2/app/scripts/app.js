angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('menu', {
		url: '/menu',
		templateUrl: 'templates/menu.html',
		controller: 'MenuCtrl'
	})
	.state('game', {
		url:'/game',
		templateUrl: 'templates/game.html',
		controller: 'GameCtrl'
	})
	.state('leaderboard', {
		url: '/game',
		templateUrl: 'templates/leaderboard.html',
		controller: 'LeaderboardCtrl'
	})
	.state('settings', {
		url: '/settings',
		templateUrl: 'templates/settings.html',
		controller: 'SettingsCtrl'
	});

	$urlRouterProvider.otherwise('/menu');
});
