const url = 'https://minecraftstefan-skliarovv1.p.rapidapi.com/getPCServerMOTD';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'd9415d47d6msh4ebbd2cb42aa479p16076ejsnf323abe26b29',
        'X-RapidAPI-Host': 'Minecraftstefan-skliarovV1.p.rapidapi.com'
    },
    body: new URLSearchParams({
        address: '<REQUIRED>'
    })
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}