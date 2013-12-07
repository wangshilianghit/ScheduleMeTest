
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
        var url = '../add_appointment';
        console.log('adding a timeslot ');
		//prompt(  $('#customerEmail').val() );
        var formData = {
    		firstName: $('#customerFirstName').val(),
            lastName: $('#customerLastName').val(),
            email: $('#customerEmail').val(),
			phone: $('#customerPhone').val(),
			notes: $('#additionalNotes').val()
        }; 
		// unclear why, but this needs to be added separately
		formData.time =  new Date( $('#datetimepicker').val()  );

/*		prompt(formData.firstName);
		var tempEvent = new Object();
		tempEvent.start = new Date( $('#datetimepicker').val()  );
		tempEvent.allDay = false;
		tempEvent.title = formData.firstName;
		$('#content').fullCalendar('renderEvent', tempEvent, true);
*/
        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formData,
            success:function (data) {

                console.log(["Schedule Appointment request details: ", data]);

                if(data.error) { // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, add the appointment to the calendar
					var tempEvent = new Object();
					tempEvent.start = new Date( $('#datetimepicker').val()  );
					tempEvent.allDay = false;
					tempEvent.title = formData.firstName;
					$('#content').fullCalendar('renderEvent', tempEvent, true);
                }
            }
        }); 
    } 

});

