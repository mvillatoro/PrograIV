'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

        // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA Template for Visual Studio';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

        // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

        // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Sign In';
        // TODO: Authorize a user

        $scope.ShowError = true;

        $scope.login = function (user, password) {
            var istrue = $scope.IsUser(user, password); 
            if (istrue) {   
                $location.path('/my-table');
            } else {
                $scope.ShowError = istrue; 
                
            }
        };

        $scope.users = [];

        var master = {
            nombre: "Wade",
            apellido: "Wilson",
            usuario: "Admin",
            correo: "mvilla2208@gmail.com",
            password: "alpha",
            esAdmin: true,
            activo: true
        }
        var mortal = {
            nombre: "Bruce",
            apellido: "Wayne",
            usuario: "br_wayne",
            correo: "br_wayne@batman.dc",
            password: "alfred",
            esAdmin: false,
            activo: true
        }



        $scope.users.push(master);
        $scope.users.push(mortal);

        $scope.IsUser = function (username, password)
        {
            var i;
            for (i = 0; i < $scope.users.length ; i++) {
                if (username === $scope.users[i].usuario) {
                    if (password === $scope.users[i].password) {
                        return true;
                    }
                }
            }
            return false;
        }
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

        // Path: /forgot-password
    .controller('ForgotPasswordCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Forgot Password';
        $scope.RecoverPassword = function () {
            $scope.ShowMessage = true;
            return false;
        };
    }])
 
        // Path: /register
    .controller('RegisterCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Register';
        $scope.aux = function() {
            $location.path('/login');
        }
    }])

        // Path: /my-table
    .controller('MyTableCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | My Table';
        $scope.misligas = [];
        $scope.NotFollowing = [];

        $scope.predict = function() {
            $location.path('/predict-a-goal');
        }


        $scope.logout = function () {
            $location.path('/');
            return false;
        };

        $scope.PushToMyTable = function (idLigaA, leagueA, proximafechaA, proximoEncuentroA) {
            var liston = $scope.AddToMyTable(idLigaA, leagueA, proximafechaA, proximoEncuentroA);
            $scope.misligas.push(liston);
        }

        $scope.AddToMyTable = function (idLigaA, leagueA, proximafechaA, proximoEncuentroA) {
            var leagueid = {
                idLiga: idLigaA,
                league: leagueA,
                proximafecha: proximafechaA,
                proximoEncuentro: proximoEncuentroA,
                acierto: 0,
                pts: 0
            }
            return leagueid;
        }

        var liga1 = {
            idLiga: 0,
            league: "Italiana",
            proximafecha: "24 / 08 / 2014",
            proximoEncuentro: "Milan vs. inter",
            acierto: 0,
            pts:0
            }
        var liga2 = {
            idLiga: 1,
            league: "Inglesa",
            proximafecha: "24 / 08 / 2014",
            proximoEncuentro: "Arsenal vs. Liverpool",
            acierto: 0,
            pts: 0
        }

        var liga3 = {
            idLiga: 2,
            league: "Española",
            proximafecha: "24 / 08 / 2014",
            proximoEncuentro: " FC Barcelona vs. Elche FC",
            acierto: 0,
            pts: 0
        }

        $scope.NotFollowing.push(liga1);
        $scope.NotFollowing.push(liga2);
        $scope.misligas.push(liga3);


    }])

        // Path: /admin-settings
    .controller('AdminSettingsCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Admin Settings';

        $scope.misligas = [];
        $scope.Matches = [];

        var liga1 = {
            id: 1,
            nombre: "Inglesa",
            proximo_Fecha: "22/08/2014",
            proximo_Encuentro: "Man U vs Arsenal",
            aciertos: 4,
            puntos: 6
        };
        $scope.misligas.push(liga1);

        $scope.addLeague = function (id, league, nextmatch, hits, points) {
            var leagueid = {
                liga: id,
                nombre: league,
                proximo_Fecha: new Date(),
                proximo_Encuentro: nextmatch,
                aciertos: hits,
                puntos: points,
                activo: true
            }
            return leagueid;
        }

        $scope.pushLeague = function (id, league, nextmatch, hits, points) {
            var ides= $scope.misligas.length + 1;
            var liston = $scope.addLeague(ides, league, nextmatch, hits, points);
            $scope.misligas.push(liston);
            $scope.AddLiga();
        }
        //Muestra el modo de edicion de liga
        $scope.AddLiga = function () {
            if ($scope.ShowMessage === true) {
                $scope.ShowMessage = false;
            } else {
                $scope.ShowMessage = true;
            }   
        };

        //Modifica cualquier dato de una liga
        $scope.EditLeague = function () {
            if ($scope.ShowEdit === true) {
                $scope.ShowEdit = false;
            } else {
                $scope.ShowEdit = true;
            }
        };

        var match1 = {
            id: 1,
            liga: "Inglesa",
            proximo_Fecha: "22/08/2014",
            proximo_Encuentro: "Man U vs Arsenal"
        };
        $scope.Matches.push(match1);

        $scope.addMatch = function (league, nextdate, nextmatch) {
            var matchid = {
                liga: league,
                proximo_Fecha: nextmatch,
                proximo_Encuentro: nextmatch,
            }
            return matchid;
        }

        $scope.pushMatch = function (league, nextdate, nextmatch) {
            var ides = $scope.misligas.length + 1;
            var liston = $scope.addMatch(ides, league, nextdate, nextmatch);
            $scope.Matches.push(liston);
            $scope.Editmode();
        }

        $scope.Editmode = function () {
            if ($scope.ShowEdit === true) {
                $scope.ShowEdit = false;
            } else {
                $scope.ShowEdit = true;
            }
        };



    }])

        // Path: /predict-a-goal
    .controller('PredictAGoalCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Forgot Password';
        $scope.allCool = function () {
            $scope.ShowMessage = true;
            $location.path('/my-table');

        };

    }])

        // Path: /leagues
    .controller('LeaguesCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Leagues';

        $scope.teams = [];

        var team1 = {
            id: 1,
            nombre: "Elche FC",
            jj:0,
            jg:0,
            je:0,
            jp:0,
            gf:0,
            gc:0,
            dg:0,
            pts:0,  
        };

        $scope.teams.push(team1);

        $scope.addTeam = function (id, name, gp, gw, gt, gl, gf, ga, gd, pt) {
            var teamData= {
                id: 2,
                nombre: name,
                jj: gp,
                jg: gw,
                je: gt,
                jp: gl,
                gf: gf,
                gc: ga,
                dg: gd,
                pts: pt,
            }
            return teamData;
        }

        $scope.pushTeam = function (id, name, gp, gw, gt, gl, gf, ga, gd, pt) {
            var ides = $scope.teams.length + 1;
            var liston = $scope.addTeam(ides, name, gp, gw, gt, gl, gf, ga, gd, pt);
            $scope.teams.push(liston);
        }

        $scope.edicion = function () {
            if ($scope.ShowMessage === true) {
                $scope.ShowMessage = false;
            } else {
                $scope.ShowMessage = true;
            }
        };

    }])

        // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);