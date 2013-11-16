window.BusinessHomeView = Backbone.View.extend({

    initialize: function () {

    },

    events:{
        "click #employeeSignup":"employeeSignupClicked",
        "click #businessSignup":"businessSignupClicked",
        "click #signupButton":"signupCustomerClicked",
        "click #businessGenerateTokens" : "generateTokensClicked"

    },

    render: function () {
        $(this.el).html(this.template());

        return this;
    },

    generateTokensClicked: function (){
        app.businessGenerateTokens.render();
    }

});