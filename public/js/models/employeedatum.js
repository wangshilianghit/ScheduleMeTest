window.UserModel = Backbone.Model.extend({

    urlRoot:"../employees:id",

    defaults: {
        id: "",
        business:"business", //employee belongs to this business
        email:"email", //employee contact email
        services: [], //services provided by this employee
        certified: false //is employee certified


    },
    initialize:function () {


    },

    selectBusiness: function( business ){
        //TO DO: business on RHS should be a model at some point
        this.set({business:business});
    }



});
//Will contain information about employees for the Business User
window.EmployeeDataCollection = Backbone.Collection.extend({


})



