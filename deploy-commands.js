const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require("dotenv");
dotenv.config();
const { DISCORD_TOKEN, CLIENT_ID } = process.env;

const commands = [
	new SlashCommandBuilder().setName("redpanda").setDescription("Sends an image of a red panda"),
]
	.map(command => command.toJSON());

const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);

rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands })
	.then(() => console.log("Successfully registered application commands."))
	.catch(console.error);
