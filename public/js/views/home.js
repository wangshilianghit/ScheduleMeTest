/**
 * Created by Ricky on 11/12/13.
 */
window.HomeView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Home View');
//        this.template = _.template(directory.utils.templateLoader.get('home'));
//        this.template = templates['Home'];
    },

    events:{
        "click #signupButton":"signupButtonClicked"
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    signupButtonClicked:function () {
        app.customerSignupView.render();
    }

});