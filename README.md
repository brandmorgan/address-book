TDD 

Describe: Destination() 

test: "It should create destination object type with multiple properties"
code: madrid; 
expected output: 
{location: "madrid", landmarks: ["La Sagrada Familia", "Gran Via", "Plaza Mayor"], time of year: "Fall"}


Describe: addDestination()

test: "It should assign unique ID for each destination addition to an addressBook"
code: addressBook.addDestination(madrid);
expected output: addressBook {1: madrid}

describe: AddressBook()

test: "It should add destination to addressBook"
code: addressBook[0];
expected output: madrid


describe: assignId()

test: "It will increase the Id number in the addressBook when used" 
code: assignId();
expected output: currenId = 1

