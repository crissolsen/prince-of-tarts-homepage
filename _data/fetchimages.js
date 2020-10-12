const axios = require("axios")
require("dotenv").config();

module.exports = async function () {
  try {
    const response = await axios.get(
      process.env.CLOUDINARY_URL 
    );
      //Once we get all the image data, push it to array with only the URLS. Use that with parseURL function to add in transformations.
      let allData = response.data.resources
      let allURLS = []
      for(let i=0;i<allData.length;i++) {
        allURLS.push(transformedURL(allData[i].url))
      }
     return allURLS
  } catch (error) {
    console.error(error);
  }
};

  //Takes current URL and adds in any transformation for all of them from Cloudinary. In this case, q_auto and f_auto
function transformedURL(url) {
  let baseURL = "http://res.cloudinary.com/dvwsiufhl/image/upload/"
  let optimisations = "q_auto,f_auto/"
  let optimisedURLEnd = baseURL.concat(optimisations)
  let endOfURL = url.slice(baseURL.length);
  let returnedURL = optimisedURLEnd.concat(endOfURL)
  return returnedURL
}