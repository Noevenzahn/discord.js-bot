const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("secret-ping")
    .setDescription("Replies with Pong just to you."),
  async execute(interaction) {
    await interaction.reply({
      content: "A Pong just for you!",
      ephemeral: true,
    });
  },
};
