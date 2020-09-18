async function fetchData(route, method, data) {
  let url = 'https://api-buddy.herokuapp.com/api/'+route;
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
export default fetchData;
