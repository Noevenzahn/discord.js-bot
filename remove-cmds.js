const { SlashCommandBuilder } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const { clientId, token, guildId } = require("./config.json");

const rest = new REST({ version: "9" }).setToken(token);
rest.get(Routes.applicationGuildCommands(clientId, guildId)).then((data) => {
  const promises = [];
  for (const command of data) {
    const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${
      command.id
    }`;
    promises.push(rest.delete(deleteUrl));
  }
  return Promise.all(promises);
});
