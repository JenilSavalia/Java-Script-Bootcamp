// The fetch() function returns a Promise which is fulfilled with a Response 
// object representing the server's response. You can then check the request 
// status and extract the body of the response in various formats, including
//  text and JSON, by calling the appropriate method on the response.

async function getData() {
    const url = "https://example.org/products.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}