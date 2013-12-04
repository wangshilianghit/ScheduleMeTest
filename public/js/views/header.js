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
        app.loginView.render();

    },
    logoutHereButtonClicked:function () {

    }


});