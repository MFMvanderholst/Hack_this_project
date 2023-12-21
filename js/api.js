const dogUrl = 'https://dog.ceo/api/breeds/image/random';
async function fetchData($x) {
    try {
        const response = await fetch(dogUrl);
        const result = await response.json();
        document.querySelector($x).src = result.message;
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