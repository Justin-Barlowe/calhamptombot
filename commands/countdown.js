//Countdown command to show how many days until GTAVI release
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('countdown')
    .setDescription('Shows how many days until GTAVI release'),

  async execute(interaction) {
    try {
      // Target date: 2026-11-19 (local time interpreted as midnight)
      const target = new Date(Date.UTC(2026, 10, 19)); // months are 0-indexed, so 10 = November

      // Current time in UTC (strip time of day for consistent whole-day counting)
      const now = new Date();
      const todayUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

      const msPerDay = 24 * 60 * 60 * 1000;
      const diffMs = target - todayUtc;

      let days = Math.ceil(diffMs / msPerDay);
      if (diffMs <= 0) days = 0;

      const dayWord = days === 1 ? 'day' : 'days';

      await interaction.reply({ content: `GTA VI releases in ${days} ${dayWord}.`, ephemeral: false });
    } catch (err) {
      console.error('Error in countdown command:', err);
      await interaction.reply({ content: 'Something went wrong calculating the countdown.', ephemeral: true });
    }
  },
};