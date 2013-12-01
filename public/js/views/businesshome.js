window.BusinessHomeView = Backbone.View.extend({

    initialize: function () {

    },

    events:{

        "click #businessGenerateTokens" : "generateTokensClicked"
        /*"click #businessEmployeeSettings" : "employeeSettingsClicked",
        "click #businessServiceSettings" : "serviceSettingsClicked",
        "click #businessCalendarSettings" : "calendarSettingsClicked",
        "click #businessViewAnalytics" : "viewAnalyticsClicked"
*/
    },

    render: function () {
        $(this.el).html(this.template());

        return this;
    },

    generateTokensClicked: function (){
        app.businessGenerateTokens.render();
    }

   /* employeeSettingsClicked: function (){
        app.businessEmployeeSettingsClicked.render();
    },

    serviceSettingsClicked: function (){
        app.businessServiceSettingsClicked.render();
    },

    calendarSettingsClicked: function (){
        app.businessCalendarSettingsClicked.render();
    },

    businessViewAnalyticsClicked: function (){
        app.businessViewAnalyticsClicked.render();
    } */
});