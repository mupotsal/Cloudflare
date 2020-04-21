addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
const url = "https://cfw-takehome.developers.workers.dev/api/variants";
async function handleRequest(request) {
	let thing =	{ 
		method: 'GET'
  }
  var urls = []
	return fetch(url, thing)
		.then(response => {
			if (response.status === 200) {
			  return urls.push(response.json());
			} else { 
        return response.text()
        console.log(response)
			  throw new Error('Something is not working well');
			}
		})
		.then(response => {
			console.debug(response);
			return new Response(response)
		}).catch(error => {
      
			console.error(error);
		});
}

