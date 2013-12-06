window.BusinessDataModel = Backbone.Model.extend({

    urlRoot:"..api/business:id",

    defaults: {
        id: "",
        business:"business name",
        email:"business email",
        hoursOfOperation:"9-5",
        daysOfWeek: "1111111",
        activeRange: []
    },
    initialize:function () {


    },

    selectBusiness: function( business ){
        //TO DO: business on RHS should be a model at some point
        this.set({business:business});
    }



});




