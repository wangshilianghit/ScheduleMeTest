
window.BusinessViewCalendarView = Backbone.View.extend({


    initialize: function () {


    },

    events:{
        //add event listners for add/remove,view schedules,manage services
        "click #addTimeslotButton":"addTimeslotClicked"
    },

    render: function () {
        $(this.el).html(this.template());

		return this;

	},

    addTimeslotClicked:function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
       var url = '../signup_customer';
        console.log('adding a timeslot ');
        var formValues = {
            firstName: $('#inputFirstName').val(),
            lastName: $('#inputLastName').val(),
            email: $('#inputEmail').val(),
            password: $('#inputPassword').val()
        };
		var tempEvent = new Object();
		var d = new Date();

		// this is how you call the datetimepicker. Ideally this
		// will not be in any final version of our code...
		prompt( new Date( $('#datetimepicker').val() ));
		
		tempEvent.start = new Date(d.getFullYear(), d.getMonth(), d.getDate() );
		tempEvent.allDay = true;
		$('#content').fullCalendar('renderEvent', tempEvent, true);
		prompt($formValues.lastName);
/*
        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formValues,
            success:function (data) {

                console.log(["Customer Signup request details: ", data]);

                if(data.error) { // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    app.navigate("/login",{trigger:true});
                }
            }
        }); */
    } 

});

