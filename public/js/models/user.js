window.UserModel = Backbone.Model.extend({

    urlRoot:"../users:id",

    defaults: {
        id: "",
        firstName:"",
        lastName:"lname",
        business:"bname",
        email:"email",
        type:"none"
    },
    initialize:function () {


    },

    selectBusiness: function( business ){
        //TO DO: business on RHS should be a model at some point
        this.set({business:business});
    }



});
//Will contain information about businesses, appointments, settings for the User
window.UserCollection = Backbone.Collection.extend({


})



