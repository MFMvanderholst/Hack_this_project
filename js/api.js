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


// url variable
const gameUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15';
textTitle = "";

async function fetchData() {
    try {
        const response = await fetch(gameUrl);
        const result = await response.json();
        result.forEach(myFunction);

        function myFunction(item) {
            
            const title = item.title;
            const dealRating = item.dealRating;
            const normalPrice = item.normalPrice;
            const salePrice = item.salePrice;

            textTitle += `title: ${title}<br>
                        rating: ${dealRating}<br>
                        originalPrice: ${normalPrice}<br>
                        salesPrice: ${salePrice}<br>
                                                <br>`;
        }

        document.querySelector('.title').innerHTML = textTitle;
        
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
