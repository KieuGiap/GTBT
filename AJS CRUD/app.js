var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
    console.log("My controller......");


    $scope.users = [
        {name: "Giap", email: "kieugiap@gmail.com", fullname: "Kieu Giap"},
        {name: "giap", email: "giapkd@vnpt.vn", fullname: "Kieu Duy Giap"},
        {name: "CodeLean", email: "codelean@gmail.com", fullname: "Code Lean"},
    ];

    $scope.addUser = function() {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added sucessfully";
    };

    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };

    $scope.editUser = function(){
        $scope.message = "User Edited sucessfully";
    };

    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser));
        $scope.message = "User Deleted sucessfully";
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    };
});