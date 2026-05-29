const { SlashCommandBuilder } = require('discord.js');

const responses = [
    'Taking a shit',
    'Eating of courses', 
    'Cuddling Nik'
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wheresbrendan')
        .setDescription('Replies with Brendan\'s location!'),

    async execute(interaction) {
        const reply = responses[Math.floor(Math.random() * responses.length)];
        await interaction.reply(reply);
    }
};