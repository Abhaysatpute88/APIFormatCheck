function isapirequestvalid(request, expectedProperties) {
    // Check if the request is an object
    if (typeof request !== 'object' || request === null) {
      return false;
    }
  
    // Check if the expectedProperties is an object
    if (typeof expectedProperties !== 'object' || expectedProperties === null) {
      return false;
    }
  
    // Check if the request has all the expected properties and their types match
    for (const [propertyName, propertyType] of Object.entries(expectedProperties)) {
      if (!request.hasOwnProperty(propertyName) || typeof request[propertyName] !== propertyType) {
        return false;
      }
    }
  
    // If all checks pass, return true
    return true;
}

module.exports = isapirequestvalid