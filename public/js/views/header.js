/**
 * Created by Ricky on 11/12/13.
 */
window.HeaderView = Backbone.View.extend({


    initialize: function () {
        this.model.bind("change", this.render, this);


    },

    events:{
        "click #login":"loginHereButtonClicked",
        "click #logout":"logoutHereButtonClicked"

    },

    render: function () {
        $(this.el).empty();
        console.log("rendered header");
        $(this.el).html(this.template(this.model.toJSON()));

        return this;
    },

    loginHereButtonClicked:function () {
        if(this.model.get('type') == 'none'){
            app.loginView.render();
        }
        else{
            app.navigate(this.model.get('type')+'Home', {trigger:true});
        }

    },
    logoutHereButtonClicked:function () {
        var myModel = this.model;
        $.ajax({
            url: "../logout",
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                console.log(res);
                myModel.set(myModel.defaults);
                //add a more complete model unload here.
                app.navigate('/', {trigger: true});

            }
        });

    }


});