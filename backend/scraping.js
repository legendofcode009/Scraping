const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS to allow your frontend to make requests
app.use(cors());

// Scraping endpoint
app.get("/scrape-books", async (req, res) => {
  const url =
    "https://books.toscrape.com/catalogue/category/books/travel_2/index.html";

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Extract book details
    const books = [];
    $("article.product_pod").each((i, element) => {
      const title = $(element).find("h3 a").attr("title");
      const price = $(element).find(".price_color").text();
      const availability = $(element)
        .find(".instock.availability")
        .text()
        .trim();
      const ratingClass = $(element).find(".star-rating").attr("class"); // e.g., "star-rating Four"
      const rating = ratingClass ? ratingClass.split(" ")[1] : "None";

      const image = $(element).find(".image_container img").attr("src");
      const fullImageUrl = `https://books.toscrape.com/${image}`; // Full URL of the image

      books.push({ title, price, availability, rating, image: fullImageUrl });
    });

    // Return the books as JSON
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to scrape data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
