/**
 * Created by Ricky on 12/6/13.
 */

window.BusinessAddRemoveEmployeesView = Backbone.View.extend({


    initialize: function () {
        this.model.bind("change", this.render, this);


    },

    events:{
        //add event listners for add/remove,view schedules,manage services
    },

    render: function () {
        $(this.el).empty();
        $(this.el).html(this.template(this.model.toJSON()));

        return this;
    }



});

