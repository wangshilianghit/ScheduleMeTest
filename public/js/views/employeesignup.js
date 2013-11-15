/**
 * Created by Ricky on 11/12/13.
 */
window.EmployeeSignupView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing signup View');

    },

    events:{
        "click #customerSignup":"customerSignupClicked",
        "click #businessSignup":"businessSignupClicked"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    customerSignupClicked: function (){
        app.customerSignupView.render();
    },

    businessSignupClicked: function (){
        app.businessSignupView.render();
    }






});