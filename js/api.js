const dogUrl = 'https://dog.ceo/api/breeds/image/random';
async function fetchData($x) {
    try {
        const response = await fetch(dogUrl);
        const result = await response.json();

        if (response.status !== 404) {
            document.querySelector($x).src = result.message;
        } else if (response.status === 404) {
            header('http://127.0.0.1:5500/subPages/doggo.html');
        }
       
        
        
        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the asynchronous function
fetchData('#a');
fetchData('#b');
fetchData('#c');
fetchData('#d');
fetchData('#e');
fetchData('#f');