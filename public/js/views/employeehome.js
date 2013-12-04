window.EmployeeHomeView = Backbone.View.extend({

    initialize: function () {

    },

    render: function () {
        $(this.el).html(this.template());
        $('#logout').show();

        return this;
    }

});