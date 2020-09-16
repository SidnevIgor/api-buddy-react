let url = 'https://api-buddy.herokuapp.com/';
async function fetchData(route, method, data) {
  url+=route;
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}
export default fetchData;
