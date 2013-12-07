
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
        console.log('adding a timeslot ');
		//prompt(  $('#customerEmail').val() );
        var formData = {
    		firstName: $('#customerFirstName').val(),
            lastName: $('#customerLastName').val(),
            email: $('#customerEmail').val(),
			phone: $('#customerPhone').val(),
			notes: $('#additionalNotes').val() 
        }; 
		prompt(formData.firstName);
		var tempEvent = new Object();

		tempEvent.start = new Date( $('#datetimepicker').val()  );
		tempEvent.allDay = false;
		tempEvent.title = formData.firstName;
		$('#content').fullCalendar('renderEvent', tempEvent, true);
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

