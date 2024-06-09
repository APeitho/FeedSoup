// JavaScript to send FeedBro RSS feeds to Discord webhook
var webhookURL = "https://discord.com/api/webhooks/1240870541406244885/1Vx2-Yrj-Dvm212b5hHaTsZ9Di0y4bLkqh_KwBDLmYplBKM_V7An_5NFS-FxiL38Fem6"; // Replace with your Discord webhook URL

function sendToDiscord(item) {
    var message = {
        "content": "",
    "username": "Hey Trainers!",
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