export default function getModel(chosenModel) {
  switch (chosenModel) {
    case 'Store':
      return {
        "storeId": 1,
        "city": "New York",
        "street": "Nelson",
        "building": "24A",
        "postcode": "10030",
        "employees": [ 1, 2, 3 ]
      };
      break;
    case 'Book':
      return {
        "bookId": 1,
        "title": "Walk Like a Man",
        "author": "Hallsy Udale",
        "genre": "Comedy",
        "price": 35,
        "issueDate": "1/26/2012",
        "publisher": "Oyope",
        "imageUrl": "http://picsum.photos/id/100/200"
      };
      break;
    case 'Customer':
      return {
        "customerId": 1,
        "firstName": "Evy",
        "lastName": "Maxted",
        "email": "emaxted0@theatlantic.com",
        "tel": "266-846-9674",
        "password": "zKEEMj"
     };
     break;
    case 'Employee':
      return {
        "employeeId": 1,
        "firstName": "Codie",
        "lastName": "Stembridge",
        "storeId": 1,
        "position": "consultant"
      };
      break;
    case 'Order':
      return {
        "orderId": 1,
    "date": "18/03/2018",
    "employeeId": 4,
    "customerId": 2,
    "orderTotal": 428,
    "books": [1, 2, 4]
      };
      break;
  }
}
