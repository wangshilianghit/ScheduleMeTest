var mongoose = require('mongoose')
    ,Schema = mongoose.Schema
    , _ = require('underscore')


/**
 * Employee Schema
 */

var EmployeeSchema = new Schema(

    {
        business: { type: String, default:''},//business associated with the account
        firstName:{type: String},
        lastName:{type: String},
        email: { type: String, default: '' }, //contact email
        phoneNumber: { type: String, default: ''}, //contact phone number
        certified: {type: Boolean, default: false}, //has employee created an account with a access token
        authorizedServices: {type: [String]}
    }

)




module.exports = mongoose.model('Employee', EmployeeSchema)

