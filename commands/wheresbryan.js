const { SlashCommandBuilder } = require('discord.js');

const responses = [
    'Bryan is gettin beat',
    'Not fixing his ceiling',
    'Not fixing his floor', 
    'Not fixing his pool', 
    'Going to CNA school with the Fayetteville Blacks'          
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wheresbryan')
        .setDescription('Find out where Bryan is'),
        
    async execute(interaction) {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        await interaction.reply(randomResponse);
    }           
};

