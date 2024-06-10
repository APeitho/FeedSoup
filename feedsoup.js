// JavaScript to send FeedBro RSS feeds to Discord webhook
function sendToDiscord(item, webhookURL) {
    var config;

    // Select the appropriate configuration based on the webhook URL
    if (webhookURL === "POKEMONTCG") {
        config = {
            // Pokemon TCG
        };
    } else if (webhookURL === "FABTCG") {
        config = {
            // FAB
        };
        
    } else if (webhookURL === "MTGTCG") {
            config = {
                // MTG
            };
    } else if (webhookURL === "https://discordapp.com/api/webhooks/1240869124125491251/Wb5YXtPx2yEP17l32vl3cAPfKG9HwDU8nfxpd8RrG4iaMbCQTG2FbKS0SiA8RAofFpU3") {
            config = {
                // SWLegion
            };
    } else if (webhookURL === "D&D") {
            config = {
                // Dungeons and Dragons
            };
    }   else if (webhookURL === "GWorkshop") {
            config = {
                // Games Workshop
            };
    }else if (webhookURL === "NSFigures")
            config = {
                // NSFigures
            };
    } else if (webhookURL === "Warlord")
            config = {
                // Warlord Games here
            };
    } else {
        config = {
            // Fifth configuration
        };
    }

    var message = {
        "content": config.content,
        "username": config.username,
        "embeds": [
            {
                "title": item.title,
                "description": item.summary,
                "url": item.link,
                "color": config.embeds[0].color,
                "footer": {
                    "text": config.embeds[0].footer.text.replace("${PubDate}", item.publishedDate).replace("${author}", item.author),
                    "icon_url": config.embeds[0].footer.replace("$icon_url")
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