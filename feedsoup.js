// JavaScript to send FeedBro RSS feeds to Discord webhook
function sendToDiscord(item, webhookURL) {
    var config;

    // Select the appropriate configuration based on the webhook URL
    if (webhookURL === "POKEMONTCG")
        config = {
            // Pokemon TCG
        };
    elseif (webhookURL === "FABTCG");
        config = {
            // FAB
        };
    elseif (webhookURL === "MTGTCG");
            config = {
                // MTG
            };
    elseif (webhookURL === "https://discordapp.com/api/webhooks/1240869124125491251/Wb5YXtPx2yEP17l32vl3cAPfKG9HwDU8nfxpd8RrG4iaMbCQTG2FbKS0SiA8RAofFpU3") ;
            config = {
                // SWLegion
            };
    elseif (webhookURL === "D&D") ;
            config = {
                // Dungeons and Dragons
            };
    elseif (webhookURL === "GWorkshop") ;
            config = {
                // Games Workshop
            };
       elseif (webhookURL === "NSFigures");
            config = {
                // NSFigures
            };
      elseif(webhookURL === "Warlord")
            config = {
                // Warlord Games here
            };
    
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

// Call sendToDiscord for each item
for (var i = 0; i < items.length; i++) {
    sendToDiscord(items[i]);
}
}