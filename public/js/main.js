// Tell jQuery to watch for any 401 or 403 errors and handle them appropriately
$.ajaxSetup({
    statusCode: {
        401: function(){
            // Redirec the to the login page.
            window.location.replace('#login');
            alert("Sorry. Login authorization failed.");
        },
        403: function() {
            // 403 -- Access denied
            window.location.replace('#denied');
            alert("Access Denied. Server denied access.");
        }
    }
});

window.Router = Backbone.Router.extend({

    routes: {
        "": "home",
        "customerSignup" : "customerSignup",
        "employeeSignup" : "employeeSignup",
        "businessSignup" : "businessSignup",
        "customerHome" : "customerHome",
        "employeeHome" : "employeeHome",
        "businessHome" : "businessHome",
        "login": "login",
        "businessGenerateTokens" : "businessGenerateTokens",
        "businessEmployeeSettings" : "businessEmployeeSettings",
        "businessServiceSettings" : "businessServiceSettings",
        "businessViewAnalytics" : "businessViewAnalytics",
        "businessAddRemoveEmployees" : "businessAddRemoveEmployees"

    },

    initialize: function () {
        //create a UserModel to use for this session
        this.userModel = new UserModel();
        this.headerView = new HeaderView({model:this.userModel});
        $('.header').html(this.headerView.render().el);
        this.footerView = new FooterView();
        $('.footer').html(this.footerView.render().el);
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.homeView.el);
        $("#subcontent").empty();
        $('#logout').hide();


    },

    customerSignup: function () {
        routeInitialViewCreator.make(this,"CustomerSignupView","userModel","#content");

    },
    businessSignup: function () {
        routeInitialViewCreator.make(this,"BusinessSignupView","userModel","#content");

    },
    employeeSignup: function () {
        routeInitialViewCreator.make(this,"EmployeeSignupView","userModel","#content");

    },
    customerHome: function () {
        routeInitialViewCreator.make(this,"CustomerHomeView","userModel","#content");

    },
    businessHome: function () {
        routeInitialViewCreator.make(this,"BusinessHomeView","userModel","#content");

    },
    employeeHome: function () {

        routeInitialViewCreator.make(this,"EmployeeHomeView","userModel","#content");

    },

    login: function () {
        routeInitialViewCreator.make(this,"LoginView","userModel","#content");
        $('#subcontent').empty();

    },

    businessGenerateTokens: function() {
        routeInitialViewCreator.make(this,"BusinessGenerateTokensView","userModel","#subcontent");
    },

    businessEmployeeSettings: function() {

        routeInitialViewCreator.make(this,"BusinessEmployeeSettingsView","userModel","#subcontent");

    },

    businessServiceSettings: function() {

        routeInitialViewCreator.make(this,"BusinessServiceSettingsView","userModel","#subcontent");
    },

    businessAddRemoveEmployees: function() {
        // Since the Home view never changes, we instantiate it and render it only once

        this.businessServiceSettingsView = new BusinessServiceSettingsView({model:this.userModel});
        this.businessServiceSettingsView.render();


        $("#subcontent").html(this.businessServiceSettingsView.el);
    }




});

templateLoader.load(["HomeView",  "HeaderView", "FooterView", "CustomerSignupView","BusinessSignupView","EmployeeSignupView", "CustomerHomeView","BusinessHomeView","EmployeeHomeView", "LoginView","BusinessGenerateTokensView","BusinessEmployeeSettingsView", "BusinessServiceSettingsView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });
