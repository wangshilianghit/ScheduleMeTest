// The Template Loader. Used to asynchronously load templates located in separate .html files
window.templateLoader = {

    load: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (window[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }, 'html'));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    }

};

window.routeInitialViewCreator = {

    make: function(that,name,model,where){
        var upper = name;

        var lower = name.charAt(0).toLowerCase() + name.slice(1);
            console.log(upper);
        console.log(lower);
       /* this.businessServiceSettingsView = new BusinessServiceSettingsView({model:this.userModel});
        this.businessServiceSettingsView.render();


        $("#subcontent").html(this.businessServiceSettingsView.el);
        */
        eval("that." + lower + "= new " + upper + "({model:" + "that." + model + "})");
        eval("that." + lower + ".render()");

        eval("$(" +"\"" + where + "\")" + ".html(that." + lower + ".el)");

    }


};