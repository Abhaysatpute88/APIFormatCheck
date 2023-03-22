# APIFormatCheck

javascript

        function isapirequestvalid(request, expectedProperties) {

This is the declaration of a function called isapirequestvalid, which takes in two parameters: request and expectedProperties.

javascript

	if (typeof request !== 'object' || request === null) {
	  return false;
	}

This is the first check within the function to determine if request is a valid object. This line checks if the request parameter is not an object or if it is null, and if either condition is true, it immediately returns false.

javascript

	if (typeof expectedProperties !== 'object' || expectedProperties === null) {
	  return false;
	}

This is the second check within the function to determine if expectedProperties is a valid object. This line checks if the expectedProperties parameter is not an object or if it is null, and if either condition is true, it immediately returns false.

javascript

	for (const [propertyName, propertyType] of Object.entries(expectedProperties)) {
	  if (!request.hasOwnProperty(propertyName) || typeof request[propertyName] !== propertyType) {
	    return false;
	  }
	}

This is the core of the function that checks if request has all the expected properties and their types match with the expected properties specified in expectedProperties. This is done using a for...of loop to iterate over each property in expectedProperties.

Within each iteration of the loop, it checks if request has the current propertyName by calling hasOwnProperty() on the request object. If the property is not found, or if the property exists but its type does not match with the propertyType defined in expectedProperties, it immediately returns false, otherwise it will return true

javascript

    for (const [propertyName, propertyType] of Object.entries(expectedProperties)) {

for is a JavaScript keyword used to initiate a loop.
const is a keyword used to declare a constant variable that cannot be re-assigned.
[propertyName, propertyType] is destructuring syntax used to extract the key-value pairs from each element of the array returned by

    Object.entries(expectedProperties).
    
of is a keyword used to specify the object or array to be iterated over.
Object.entries(expectedProperties) returns an array of key-value pairs for each property in expectedProperties. For example, if expectedProperties is { name: "string", age: "number" }, Object.entries(expectedProperties) would return [["name", "string"], ["age", "number"]].

javascript

   if (!request.hasOwnProperty(propertyName) || typeof request[propertyName] !== propertyType) {
     return false;
   }

if is a conditional statement used to check if a certain condition is true.
!request.hasOwnProperty(propertyName) checks if the request object has a property with the key specified by propertyName. If this condition is not true, the code inside the if block will be executed.

typeof request[propertyName] !== propertyType checks if the data type of the value of the property specified by propertyName in the request object is the same as the data type specified by propertyType. 

If this condition is not true, the code inside the if block will be executed.
return false is executed if either of the above conditions are not met, indicating that the request object does not match the expected properties and their data types.

Overall, the for...of loop iterates over each key-value pair in expectedProperties and checks if the corresponding property exists in the request object and has the correct data type. If any of the properties are missing or have an incorrect data type, the function returns false. If all properties match the expected values, the function returns true.


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


