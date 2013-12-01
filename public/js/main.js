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
        "businessGenerateTokens" : "businessGenerateTokens"

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
       // this.headerView.select('home-menu');
       // this.footerView.select('home-menu');
    },

    customerSignup: function () {
        // Since the signup view never changes, we instantiate it and render it only once
        if (!this.customerSignupView) {
            this.customerSignupView = new CustomerSignupView();
            this.customerSignupView.render();
        }
        else {
            this.customerSignupView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.customerSignupView.el);
        // this.headerView.select('home-menu');
        // this.footerView.select('home-menu');
    },
    businessSignup: function () {
        // Since the signup view never changes, we instantiate it and render it only once
        if (!this.businessSignupView) {
            this.businessSignupView = new BusinessSignupView();
            this.businessSignupView.render();
        }
        else {
            this.businessSignupView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.businessSignupView.el);
        // this.headerView.select('home-menu');
        // this.footerView.select('home-menu');
    },
    employeeSignup: function () {
        // Since the signup view never changes, we instantiate it and render it only once
        if (!this.employeeSignupView) {
            this.employeeSignupView = new EmployeeSignupView();
            this.employeeSignupView.render();
        }
        else {
            this.employeeSignupView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.employeeSignupView.el);
        // this.headerView.select('home-menu');
        // this.footerView.select('home-menu');
    },


    customerHome: function () {
        // Since the signup view never changes, we instantiate it and render it only once
        if (!this.customerHomeView) {
            this.customerHomeView = new CustomerHomeView({model:this.userModel});
            this.customerHomeView.render();
        }
        else {
            this.customerHomeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.customerHomeView.el);
        // this.headerView.select('home-menu');
        // this.footerView.select('home-menu');
    },
    businessHome: function () {
        // Since the Home view never changes, we instantiate it and render it only once
        if (!this.businessHomeView) {
            this.businessHomeView = new BusinessHomeView();
            this.businessHomeView.render();
        }
        else {
            this.businessHomeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.businessHomeView.el);
        // this.headerView.select('home-menu');
        // this.footerView.select('home-menu');
    },
    employeeHome: function () {
        // Since the Home view never changes, we instantiate it and render it only once
        if (!this.employeeHomeView) {
            this.employeeHomeView = new EmployeeHomeView();
            this.employeeHomeView.render();
        }
        else {
            this.employeeHomeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.employeeHomeView.el);
        // this.headerView.select('home-menu');
        // this.footerView.select('home-menu');
    },

    login: function () {
        // Since the Home view never changes, we instantiate it and render it only once
        if (!this.loginView) {
            this.loginView = new LoginView({model:this.userModel});
            this.loginView.render();
        }
        else {
            this.loginView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.loginView.el);
        // this.headerView.select('home-menu');
        // this.footerView.select('home-menu');
    },

    businessGenerateTokens: function() {
        // Since the Home view never changes, we instantiate it and render it only once
        if (!this.businessGenerateTokensView) {
            this.businessGenerateTokensView = new BusinessGenerateTokensView();
            this.businessGenerateTokensView.render();
        }
        else {
            this.businessGenerateTokens.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.businessGenerateTokensView.el);
    }


});

templateLoader.load(["HomeView",  "HeaderView", "FooterView", "CustomerSignupView","BusinessSignupView","EmployeeSignupView", "CustomerHomeView","BusinessHomeView","EmployeeHomeView", "LoginView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });
