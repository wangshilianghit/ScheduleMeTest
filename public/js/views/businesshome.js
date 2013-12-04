window.BusinessHomeView = Backbone.View.extend({

    initialize: function () {

    },

    events:{



    },

    render: function () {
        $(this.el).html(this.template());
        $('#logout').show();

        return this;
    }


});