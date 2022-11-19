const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("locales")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    const locales = {
      pl: "Witaj Świecie!",
      de: "Hallo Welt!",
    };
    interaction.reply(
      locales[interaction.locale] ?? "Hello World (default is english)"
    );
  },
};
