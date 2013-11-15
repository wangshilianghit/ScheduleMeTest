/**
 * Created by Ricky on 11/12/13.
 */
window.FooterView = Backbone.View.extend({

    initialize: function () {

    },

    render: function () {
        $(this.el).html(this.template());

        return this;
    }

});