// JavaScript to send FeedBro RSS feeds to Discord webhook
var webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your Discord webhook URL

function sendToDiscord(item) {
    var message = {
        "content": "",
        "username": "FeedBro Bot",
        "embeds": [
            {
                "title": item.title,
                "description": item.summary,
                "url": item.link,
                "color": 5814783,
                "footer": {
                    "text": item.publishedDate
                }
            }
        ]
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(message));
}

// Call sendToDiscord for each item
for (var i = 0; i < items.length; i++) {
    sendToDiscord(items[i]);
}