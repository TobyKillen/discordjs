async function startServer() {
    try {
        const DiscordJS = require('./modules/discord');
        const discordJS = new DiscordJS();
        await discordJS.start();
        console.log('Server started successfully.');
    } catch (error) {
        console.error('Error starting the server:', error);
    }
}

startServer();
