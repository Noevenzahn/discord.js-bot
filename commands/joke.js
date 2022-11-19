const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;
const fetch = require("node-fetch");

const getJoke = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const parsedJson = await res.json();
  return parsedJson.value;
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Need a Chuck Norris joke?"),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    await interaction.editReply(await getJoke());
    await interaction.followUp(await getJoke());
  },
};
