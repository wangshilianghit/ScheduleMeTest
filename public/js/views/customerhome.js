window.CustomerHomeView = Backbone.View.extend({

    initialize: function () {
        this.model.bind("change", this.render, this);

    },

    render: function () {
        $(this.el).html(this.template());

        return this;
    }

});