const axios = require("axios")
require("dotenv").config();

module.exports = async function () {
  try {
    const response = await axios.get(
      process.env.CLOUDINARY_URL 
    );
    return response.data
  } catch (error) {
    console.error(error);
  }
};