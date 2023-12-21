const url = 'https://dog.ceo/api/breeds/image/random';
messeges: [];


async function fetchData() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        document.getElementById("myImg").src = result.message;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the asynchronous function
fetchData();
