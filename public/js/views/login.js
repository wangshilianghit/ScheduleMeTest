window.LoginView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Login View');

    },

    events: {
        "click #loginButton": "login"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    login:function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        var self = this;
        var url = '../login';
        console.log('Login in... ');
        var formValues = {
            email: $('#inputEmail').val(),
            password: $('#inputPassword').val()
        };


        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formValues,
            success:function (data) {
                //JSONResponse = JSON.parse(data[1]);
                //console.log(JSONResponse);
               self.model.set({firstName:data.firstName});
                console.log(data.firstName);

                if(data.error) { // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page

                        app.navigate('businessHome', {trigger: true});
                }
            }
        });
    }
});