/**
 * Created by Ricky on 11/12/13.
 */
window.BusinessSignupView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing signup View');

    },


    events:{
        "click #employeeSignup":"employeeSignupClicked",
        "click #customerSignup":"customerSignupClicked",
        "click #signupButton":"signupBusinessClicked"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    employeeSignupClicked: function (){
        app.employeeSignupView.render();
    },

    signupBusinessClicked: function (){
        app.businessSignupView.render();
    },

    signupBusinessClicked:function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        var url = '../signup_business';
        console.log('signing up a business ');
        var formValues = {
            business: $('#inputBusinessName').val(),
            firstName: $('#inputFirstName').val(),
            lastName: $('#inputLastName').val(),
            email: $('#inputEmail').val(),
            password: $('#inputPassword').val()
        };

        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formValues,
            success:function (data) {

                console.log(["Business Signup request details: ", data]);

                if(data.error) { // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    Backbone.history.navigate("/login");
                }
            }
        });
    }



});