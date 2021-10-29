const dotenv = require("dotenv");
dotenv.config();
const {
  DISCORD_TOKEN
} = process.env;
const {
  Client,
  Intents,
  MessageEmbed
} = require("discord.js");
const fetch = (...args) => import("node-fetch").then(({
  default: fetch
}) => fetch(...args));

const client = new Client({
  intents: [Intents.FLAGS.GUILDS]
})

client.once("ready", () => {
  console.log("Started Bot!");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  const {
    commandName
  } = interaction;

  if (commandName === "redpanda") {
    fetch("https://some-random-api.ml/animal/red_panda")
      .then(response => response.json())
      .then(json => {
        const embed = new MessageEmbed()
          .setColor("#954535")
          .setImage(json.image)
          .setFooter("Random Red Panda Image")
        interaction.reply({
          embeds: [embed]
        })
      })
  }
});

client.login(DISCORD_TOKEN);
