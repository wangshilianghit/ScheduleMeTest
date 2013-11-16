module( "User Model Tests" );
test("Checks default instantiated values", function() {
    // Number of Assertions Expected
    expect(5);

    // Default Attribute Values
    equal( window.UserModel.get("id"), "", "Default id should be blank" );
    equal( window.UserModel.get("firstName"), "Login Here", "Default firstName should be 'Login Here'" );
    equal( window.UserModel.get("lastName"), "lname", "Default lastName should be 'lname'" );
    equal( window.UserModel.get("business"), "bname", "Default business should be 'business'" );
    equal( window.UserModel.get("email"), "email", "Default email should be 'email'" );
});
test( "Checks new Customer", function() {
    // Number of Assertions Expected
    expect(4);

    // Create new User
    var newUser = new User({
        email: "test@jhu.edu",
        password: "password",
        firstName: "John",
        lastName: "Doe"
    });

    equal( newUser.get("email"), "test@jhu.edu", "New email should be 'test@jhu.edu'" );
    equal( newUser.get("password"), "password", "New password should be 'password'" );
    equal( newUser.get("firstName"), "John", "New firstName should be 'John'" );
    equal( newUser.get("lastName"), "Doe", "New lastName should be 'Doe'" );
});
test( "Checks new Employee", function() {
    // Number of Assertions Expected
    expect(6);

    // Create new User
    var newUser = new User({
        email: "test@jhu.edu",
        password: "password",
        firstName: "John",
        lastName: "Doe",
        accessCode: "12345678",
        typeAccount: "employee"
    });

    equal( newUser.get("email"), "test@jhu.edu", "New email should be 'test@jhu.edu'" );
    equal( newUser.get("password"), "password", "New password should be 'password'" );
    equal( newUser.get("firstName"), "John", "New firstName should be 'John'" );
    equal( newUser.get("lastName"), "Doe", "New lastName should be 'Doe'" );
    equal( newUser.get("accessCode"), "12345678", "New accessCode should be '12345678'" );
    equal( newUser.get("typeAccount"), "employee", "New type should be 'employee'");
});
test( "Checks new Business", function() {
    // Number of Assertions Expected
    expect(6);

    // Create new User
    var newUser = new User({
        business: "Beef",
        email: "test@jhu.edu",
        password: "password",
        firstName: "John",
        lastName: "Doe",
        typeAccount: "business"
    });

    equal( newUser.get("business"), "Beef", "New business should be 'Beef'" );
    equal( newUser.get("email"), "test@jhu.edu", "New email should be 'test@jhu.edu'" );
    equal( newUser.get("password"), "password", "New password should be 'password'" );
    equal( newUser.get("firstName"), "John", "New firstName should be 'John'" );
    equal( newUser.get("lastName"), "Doe", "New lastName should be 'Doe'" );
    equal( newUser.get("typeAccount"), "business", "New type should be 'business'");
});


module( "Route Navigation Tests" );
<!-- General test for later navigation -->
test( "Model changes with URL", function() {
    var value = "newValue";

    equal( Backbone.history.loadUrl("#/something"), value, "Model did not update with URL change");
});