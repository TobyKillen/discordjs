// Require the discord.js module
const { Client, Events, GatewayIntentBits } = require('discord.js');
const config = require('dotenv').config();

class DiscordJS {
    constructor() {}

    async start() {
        // Create a new client instance
        const client = new Client({ intents: [GatewayIntentBits.Guilds] });

        // When the client is ready, run this code (only once)
        client.once(Events.ClientReady, c => {
            console.log(`Ready! Logged in as ${c.user.tag}`);
        });

        // Login to Discord with your client's token
        client.login(process.env.BOT_TOKEN);
    }
}

module.exports = DiscordJS;