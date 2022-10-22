const request = require('./node_modules/request');

const breedName = process.argv.slice(2); 
 
const breedFetcher = () => {
  const searchLink = 'https://api.thecatapi.com/v1/breeds/search?q='+ breedName; 
  request(searchLink, (error, resp, body) => {
    const data = JSON.parse(body);
    const err = JSON.parse(error); 
    // console.log(data); 
    // console.log(err); 
    if (data.length === 0) { 
      console.log(`Breed is not in the database.`)
    } else if (err !== null) {
      console.log(`message":"404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/`)
    } else {
      console.log(data[0].description);
    }
  } ); 
};

breedFetcher();

// when URL is broken 
// {"message":"404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"}