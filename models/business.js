var mongoose = require('mongoose')
    ,Schema = mongoose.Schema
    , _ = require('underscore')


/**
 * Business Schema
 */

var BusinessSchema = new Schema(

    {
        business: { type: String, default:''},//business associated with the account
        email: { type: String, default: '' }, //contact email
        phoneNumber: { type: String, default: ''}, //contact phone number
        employeeIDArray: {type: [String]}, //db ids of employees working for this business
        servicesProvided: {type: [String]}, //services added by the business owner
        validServiceDaysBitMask: {type: String, default:'1111111'} //days of the week business operates

    }

)




module.exports = mongoose.model('Business', BusinessSchema)

