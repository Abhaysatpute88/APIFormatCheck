# APIFormatCheck


How to use it:-

Install isapirequestvalid package

    npm i isapirequestvalid


The isapirequestvalid function checks whether an API request object matches an expected set of properties and their corresponding types.

Javascript

    const isapirequestvalid = require("isapirequestvalid")

    if (isapirequestvalid(apiRequest, expectedProperties)) {
    // Send the API request to the server
    } else {
    // Handle the invalid API request here
    }

Parameters

The isapirequestvalid function takes two parameters:

apiRequest (object): The API request object to validate.
expectedProperties (object): An object that defines the expected properties and their corresponding types for the apiRequest object.

Return Value

The isapirequestvalid function returns a boolean value that indicates whether the apiRequest object matches the expected properties and types defined in expectedProperties.

true if the apiRequest object matches the expected properties and types.
false if the apiRequest object does not match the expected properties and types.


Example

    const isapirequestvalid = require("isapirequestvalid")

    // Define the expected properties and types for the API request
    const expectedProperties = {
    name: 'string',
    age: 'number',
    email: 'string',
    };

    // Example API request object
    const apiRequest = {
    name: 'example name',
    age: 40,
    email: 'example@gmail.com',
    };

    // Check if the API request is valid
    if (isapirequestvalid(apiRequest, expectedProperties)) {
    // Send the API request to the server
    } else {
    // Handle the invalid API request here
    }


In this example, the isapirequestvalid function checks if the apiRequest object matches the expectedProperties object. Since the apiRequest object contains properties with the correct types and names, the function returns true.


