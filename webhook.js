document.getElementById("send").onclick = (e) => {
    const message = document.getElementById("message").value
    const email = document.getElementById("email").value
    //Ne hackelj meg kérlek :))

    fetch('https://discord.com/api/webhooks/780886497926447115/4aDkiJQ5tiJ-o4uuUgs-8-EfzOhlgUkT3jus0G0jJXZzmBtVGuNWQ_RFf2WlKAQ4kceK', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "content": null,
                "embeds": [{
                    "color": null,
                    "fields": [{
                            "name": "Email",
                            "value": email
                        },
                        {
                            "name": "Message",
                            "value": message
                        }
                    ]
                }],
                "username": "You received a message"
            })
        })
        .then(_=>document.getElementById("response").innerText = "You succesfully sent your message")
        .catch(_=>document.getElementById("error").innerText = "There was an error :/")
}