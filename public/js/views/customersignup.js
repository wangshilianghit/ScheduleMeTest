window.CustomerSignupView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing signup View');

    },

    events:{

        "click #signupButton":"signupCustomerClicked"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },


    signupCustomerClicked:function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        var url = '../signup_customer';
        console.log('signing up a customer ');
        var formValues = {
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

                console.log(["Customer Signup request details: ", data]);

                if(data.error) { // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    app.navigate("/login",{trigger:true});
                }
            }
        });
    }
});
