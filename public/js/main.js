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
        "businessAddRemoveEmployees" : "businessAddRemoveEmployees",
        "businessViewCalendar" : "businessViewCalendar"

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

         routeInitialViewCreator.make(this,"BusinessAddRemoveEmployeesView", "userModel", "#subcontent");

    },
    businessViewCalendar: function() {

        this.businessViewCalendarView = new BusinessViewCalendarView();
        this.businessViewCalendarView.render();



        $("#subcontent").html(this.businessViewCalendarView.el);
        $('#content').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'agendaWeek,agendaDay',
                ignoreTimezone: false
            },
            selectable: true,
            selectHelper: true,
            editable: true,
            defaultView: 'agendaWeek',
            slotMinutes: 15,
            firstHour: 9,
            lastHour: 18,
            defaultEventMinutes: 30,
            slotEventOverlap: false,
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    $('#content').fullCalendar('renderEvent',
                        {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay
                        },
                        true // make the event "stick"
                    );
                }
                $('#content').fullCalendar('unselect');
            },

            events: [
                {
                    //	title: 'this is a title',
                    //	start: new Date(d.getFullYear(), d.getMonth(), d.getDate() )
                }
            ]
        });
        $('#datetimepicker').datetimepicker({
            allowTimes:[
                '9:00', '9:30', '10:00', '10:30',
                '11:00', '11:30', '12:00', '12:30',
                '1:00', '1:30', '2:00', '2:30',
                '3:00', '3:30', '4:00', '4:30',
                '5:00', '5:30', '6:00', '6:30'
            ]

        });

    }

});

templateLoader.load(["HomeView",  "HeaderView", "FooterView", "CustomerSignupView","BusinessSignupView","EmployeeSignupView", "CustomerHomeView","BusinessHomeView","EmployeeHomeView", "LoginView","BusinessGenerateTokensView","BusinessEmployeeSettingsView", "BusinessServiceSettingsView", "BusinessAddRemoveEmployeesView", "BusinessViewCalendarView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });
