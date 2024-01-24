const { ContextMenuCommandInteraction, ApplicationCommandType } = require("discord.js");

const data = {
  type: ApplicationCommandType.User,
  name: "Avater",
}

const perms = {
  BotPermissions: ["SendMessages"], UserPermissions: ["SendMessages"], devOnly: false
}

/**
 * @param {ContextMenuCommandInteraction} interaction;
 * @param {Client} client;
 * @returns;
 * 
 */

async function callback(interaction, client) {
  const target = await interaction.guild.members.fetch(interaction.targetId);
  return interaction.reply({ content: target.displayAvatarURL({ extension: "png" }), ephemeral: true });
}


module.exports = { data, callback, perms }