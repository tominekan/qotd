let quotes = [
    {
        author: "Drake",
        source: "Emotionless",
        quote: "A wise man once said nothing at all",
        image: "2.jpg"
    },

    {
        author: "Destroy Lonely",
        source: "Money and Sex (ft. Ken Carson)",
        quote: "We the shit they be askin' what's the smell",
        image: "3.jpg"
    },
];

// Function that converts all quote objects to actual images
function generateHTML(quote) {
    let imgPath = `PHILOSOPHERS/${quote.image}`;
    return `<div class="quote" style="background-image: url('${imgPath}');">
            <div class="quote-content">
                <p class="quote-text">${quote.quote}</p>
                <p class="author"> - ${quote.author}</p>
                <p class="source">${quote.source}</p>
            </div>
        </div>`;
}

// Go thru and fill out all the quotes based on quotes.json
function setAllQuotes(quotes) {
    let contentElement = document.getElementById("content");
    let innerText = "";
    for (let quote of quotes) {
        innerText += generateHTML(quote)
    }

    contentElement.innerHTML = innerText;
}

fetch("quotes.json")
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Display the JSON data in the page
        setAllQuotes(data.quotes)
      })
      .catch(error => {
        console.error("Error loading JSON:", error);
      });