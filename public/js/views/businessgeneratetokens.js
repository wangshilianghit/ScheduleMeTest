window.BusinessGenerateTokensView = Backbone.View.extend({

    initialize: function () {

    },

    events:{
        "click #generateToken" : "generateTokensClicked"

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
            business: this.model.get('business')
        };

        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formValues,
            success:function (data) {

                console.log("token details: "+ data.code);
                alert("Here is your access code:\n"+data.code);

                if(data.error) { // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }

            }
        });

    }

});