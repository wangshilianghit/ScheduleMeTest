/**
 * Created by Ricky on 11/12/13.
 */
window.BusinessSignupView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing signup View');

    },


    events:{
        "click #employeeSignup":"employeeSignupClicked",
        "click #customerSignup":"customerSignupClicked"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    employeeSignupClicked: function (){
        app.employeeSignupView.render();
    },

    customerSignupClicked: function (){
        app.customerSignupView.render();
    }





});