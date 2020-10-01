async function fetchData(route, method, data, token) {
  if(!data) data = undefined;
  if(!token) token = undefined;

  let url = 'https://api-buddy.herokuapp.com/api/' + route;
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
export default fetchData;
