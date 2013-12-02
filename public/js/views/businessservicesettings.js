
window.BusinessServiceSettingsView = Backbone.View.extend({


    initialize: function () {


    },

    events:{
        //add event listners for add/remove,view schedules,manage services
    },

    render: function () {
        $(this.el).html(this.template());

        return this;
    }



});
