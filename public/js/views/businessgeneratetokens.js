window.BusinessGenerateTokensView = Backbone.View.extend({

    initialize: function () {

    },

    events:{
        "click businessGenerateTokens" : "generateTokensClicked"

    },

    render: function () {
        $(this.el).html(this.template());

        return this;
    },

    generateTokensClicked: function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        var url = '../generate_tokens';
        console.log('token generate ');
        var formValues = {
            business: 'Peter'
        };

        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formValues,
            success:function (data) {

                console.log(["Customer Signup request details: ", data.Token]);

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