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
      }
      break;
  }
}
