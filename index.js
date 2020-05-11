bruconst Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
var prefix = '/'
const delay = require('delay');
const bot = new Discord.Client();
const newUsers = new Discord.Collection();
var token = ('Njk2MjgzNDE2MTg5OTkzMDAw.Xrb7eg.i9LtgZnaIHpNcn7LvppoMTyOPQc')
//Njk2MjgzNDE2MTg5OTkzMDAw.XoxKnA.8Esirrv_UjWawilQPnfBP1GG_tg
const ms = require("ms");
var version = ("1.0")
  


client.on('ready', function () {
    console.log(`logged in ${client.user.tag}`)
    client.user.setActivity("Use " + prefix + "help | V " + version)
})


bot.on('guildMemberAdd', member => {
    
    


    const embed = new Discord.MessageEmbed()
            .setTitle("BIENVENUE")
            .setDescription("Bienvenue" + member + " sur **L'olympiome**")
            .setThumbnail(client.user.avatarURL)
            .setTimestamp(new Date())
            .setFooter("© L'OLYMPIOME 2020 - 2021")

    member.guild.channels.find("name", "✨┃bienvenue").send(embed)
    

});

/*client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'xvirus9');
    if (!channel) return;

    const canvas = canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await canvas.loadImage('https://cdn.discordapp.com/attachments/619408928727367686/702169285690392647/maxresdefault.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Slightly smaller text placed above the member's display name
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

    // Add an exclamation point here and below
    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

    channel.send(`Welcome to the server, ${member}!`, attachment);
});*/

/*client.on('guildMemberAdd', member => {
    
    client.on('message',

        member.guild.channels.get('619408928727367686').send({
            embed: {
                color: 3447003,
                title: "BIENVENUE",
                url: "",
                description: "Bienvenue" + member + " sur **L'olympiome**",
                fields: [{
                    name: "Concept",
                    value: "L'olympiome est un serveur communautaire"
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© L'OLYMPIOME 2020 - 2021"
                }
            }
        })
    )
});*/





bot.on("message", async message => {

    if (command === prefix + "mute") {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
        let role = message.guild.roles.find(r => r.name === "Mute");
        if (!role) {
            try {
                role = await message.guild.createRole({
                    name: "Mute",
                    color: "#000000",
                    permissions: []
                });

                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                console.log(e.stack)
            }
        }

        if (toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');

        await (toMute.addRole(role));
        message.channel.send("Je l'ai muté !");

        return;
    }

});

client.on('message', async (message) => {  
    if (message.content.startsWith("/kickmember")) {
        if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('You do not have the permission for kick users"  !'); }

        if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('I don\'t have the permission for kick users" !'); }

        if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }
        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) { return message.channel.send('User not found!'); }

        kickMember.kick().then((member) => {
     
            message.channel.send("`"+member.displayName + "` **has been successfully kicked by** " + message.author.id);
        })
    }

    if (message.content.startsWith("/banmember")) {
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('You do not have the permission for ban users"  !'); }

        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('I don\'t have the permission for ban users" !'); }

        if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }
        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) { return message.channel.send('User not found!'); }

        banMember.ban().then((member) => {
            message.channel.send("`"+member.displayName + "` **has been successfully banned by** " + message.author.id);
        })
    }
});

client.on('message', async (message) => {
  if(message.content.startsWith(prefix + "off")){
      message.reply("**Au revoir**");
      sleep(2000);
      client.destroy();
      sleep(3000)
      client.login(token);
}
}
)

client.on('messageReactionAdd', async  (reaction, user,) => {
	// When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.log('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}
	// Now the message has been cached and is fully available
	console.log(`${reaction.message.author} message "${reaction.message.content}" gained a reaction!`);
	// The reaction is now also fully available and the properties will be reflected accurately:
	console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
}
);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

client.on("message", message =>{
  if(!message.guild) return
  if (message.content.startsWith(prefix +'def')) {
    let args = message.content.split(' ')
      message.channel.send("📪 Le résultat de votre recherche va vous être envoyé en privé.");
      message.author.send("https://fr.wikipedia.org/wiki/" + args[1])
}
}
)
client.on("message", message => {
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'defhere')) {
        let args = message.content.split(' ')

        message.channel.send("https://fr.wikipedia.org/wiki/" + args[1])
    }

    let member = message.mentions.members.first()
})

client.on("message", message => {
    const args = message.content.split(" ").slice(1);
    var argsfinal = args.join(" ");

    var rando_imgshug = [
        'https://media1.tenor.com/images/edea458dd2cbc76b17b7973a0c23685c/tenor.gif?itemid=13041472',
        'https://media1.tenor.com/images/ef5f112be2952c59c4bc5668465439b1/tenor.gif?itemid=16038289',
        'https://media1.tenor.com/images/4f2158f495fa4a0cf80e38605dfe81e0/tenor.gif?itemid=16121369',
        'https://media1.tenor.com/images/2606d7669e77ad8820129f99bdfeb1c6/tenor.gif?itemid=14252346',
        'https://media1.tenor.com/images/83b732c53bfdd1409aec0553f9bfacfd/tenor.gif?itemid=15974226',
        'https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif?itemid=16831471',
        'https://media1.tenor.com/images/684efd91473dcfab34cb78bf16d211cf/tenor.gif?itemid=14495459',
        'https://media1.tenor.com/images/38e6c2549798384639533da90470e26d/tenor.gif?itemid=12668681',
        'https://media1.tenor.com/images/07d8ad19218d0174e53ef32edc67e16d/tenor.gif?itemid=16850726',
        'https://media1.tenor.com/images/b214bd5730fd2fdfaae989b0e2b5abb8/tenor.gif?itemid=12307787',
        'https://media1.tenor.com/images/38ff71787d331e2c8c7326846e718c4b/tenor.gif?itemid=12088250',
        'https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif?itemid=5166500',
        'https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif?itemid=14106856',
        'https://media1.tenor.com/images/de06f8f71eb9f7ac2aa363277bb15fee/tenor.gif?itemid=10426436',
        'https://media1.tenor.com/images/234d471b1068bc25d435c607224454c9/tenor.gif?itemid=3532081',
        'https://media1.tenor.com/images/297de7a5f12241b308e4d0debd017395/tenor.gif?itemid=4832629',
        'https://media1.tenor.com/images/4be3396644e87d3c201f8965104e57b7/tenor.gif?itemid=7539851',
        'https://media1.tenor.com/images/bdb36a5a556fa707614452889157edd9/tenor.gif?itemid=13327148',
        'https://media1.tenor.com/images/d3dca2dec335e5707e668b2f9813fde5/tenor.gif?itemid=12668677',
        'https://media1.tenor.com/images/b62f047f8ed11b832cb6c0d8ec30687b/tenor.gif?itemid=12668480',
        'https://media1.tenor.com/images/f2805f274471676c96aff2bc9fbedd70/tenor.gif?itemid=7552077',
        'https://media1.tenor.com/images/e9d7da26f8b2adbb8aa99cfd48c58c3e/tenor.gif?itemid=14721541',
        'https://media1.tenor.com/images/21f59590ecc99c0230f10a45de625b42/tenor.gif?itemid=15467452',
        'https://media1.tenor.com/images/78d3f21a608a4ff0c8a09ec12ffe763d/tenor.gif?itemid=16509980',
        'https://media1.tenor.com/images/af5cdc6a67f5c6d8b99d4bb3c0740bf4/tenor.gif?itemid=15793126',
        'https://media1.tenor.com/images/ff65c0f9b938f9594c822c6fc2690d4b/tenor.gif?itemid=16391919',
        'https://cdn.weeb.sh/images/HkQs_dXPZ.gif',
        'https://media.tenor.com/images/8176c865dca83a3ff4ce8fad32701da9/tenor.gif',
        'https://media.tenor.com/images/31e93bc3fa1281e7f5019fc5c51d68f7/tenor.gif',
        'https://media.tenor.com/images/fca2071ba725202f545e3f2b543f9546/tenor.gif',
        'https://media.tenor.com/images/8c7e6d62efa23ac3d9cbbbf7ba58159b/tenor.gif',
        'https://media.tenor.com/images/048a2d608e13a848666f8f2f71df202e/tenor.gif',
        'https://media.tenor.com/images/ac5a0c47918dece5e69c1cc9fbb416a9/tenor.gif'
    ]
    var hugfinal = rando_imgshug[Math.floor(Math.random() * rando_imgshug.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'hug')) {
        let args = message.content.split(' ')
        const embedhug = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`:hugging: ${message.author.toString()} ` + ' fait un câlin à ' + `**${argsfinal}**`)
            .setImage(hugfinal)
            .setTimestamp()
            .setFooter("Hug  ");
        message.channel.send(embedhug);  
    }

    var rando_imgspat = [
        'https://media.tenor.com/images/37e36267891a33899bb2d88232f9f637/tenor.gif',
        'https://media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif',
        'https://media1.tenor.com/images/d9b480bcd392d05426ae6150e986bbf0/tenor.gif?itemid=9332926', 
        'https://media.tenor.com/images/0d4f94d11b300669d1d0ace43171d23e/tenor.gif',
        'https://media.tenor.com/images/4b8690bf5bc02cfc262e0b535659561f/tenor.gif',
        'https://media.tenor.com/images/50b500c0fc0ad01a974af8b58b5e0c9b/tenor.gif',
        'https://media.tenor.com/images/51a38dac799ade758d371c2ccd69fdc4/tenor.gif',
        'https://media.tenor.com/images/2daf2f83f712962799683e4ad2b167b7/tenor.gif',
        'https://media.tenor.com/images/a671268253717ff877474fd019ef73e9/tenor.gif',
        'https://media.tenor.com/images/73a2c158e2f3c5b78f4cfad1c5c79d7b/tenor.gif',
        'https://media.tenor.com/images/d88e63f03bfcdc37439d95425e10c3fa/tenor.gif',
        'https://media.tenor.com/images/87fc4ab2abde188093f9eb0d42698be2/tenor.gif'
    ]
    var patfinal = rando_imgspat[Math.floor(Math.random() * rando_imgspat.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'pat')) {
        let args = message.content.split(' ')
        const embedpat = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`:raised_hand: ${message.author.toString()} ` + ' fait une caresse à ' + `**${args[1]}**`)
            .setImage(patfinal)
            .setTimestamp()
            .setFooter("Pat  ");
        message.channel.send(embedpat);
    }

    var rando_imgskissjoue = [
        'https://media.tenor.com/images/14513dad197291879cbab8b970b6fb7b/tenor.gif',
        'https://media.tenor.com/images/dac6a7272f17e7bd38341917b2064e9d/tenor.gif',
        'https://media.tenor.com/images/a639662ea62cf7c74e594d5f3d030b1a/tenor.gif',
        'https://media.tenor.com/images/0136ddedea728ae27df8fbcd19d680f5/tenor.gif',
        'https://media.tenor.com/images/aa84b47260e0155988fccf1b57cc92de/tenor.gif',
        'https://media.tenor.com/images/a6669f4044d66658c7ce96be768965e4/tenor.gif',
        'https://media.tenor.com/images/de18124ebe36764446ee2dbf54a672bf/tenor.gif',
        'https://media.tenor.com/images/822b11c4ab7843229fdd4abf5ccadf61/tenor.gif',
        'https://media.tenor.com/images/5c4e08fc2bf11b81980d434799e35c01/tenor.gif'
    ]
    var kissjouefinal = rando_imgskissjoue[Math.floor(Math.random() * rando_imgskissjoue.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'cheekkiss')) {
        let args = message.content.split(' ')
        const embedkissjoue = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`😙 ${message.author.toString()} ` + ' fait un bisous sur la joue à ' + `**${args[1]}**`)
            .setImage(kissjouefinal)
            .setTimestamp()
            .setFooter("Kissjoue  ");
        message.channel.send(embedkissjoue);
    }

    var rando_imgskiss = [
        'https://media.tenor.com/images/4ad024c4737a61ee33b2cc425291cfc1/tenor.gif',
        'https://media.tenor.com/images/cebf4dc3536801abbbf4be8cc9d441f1/tenor.gif',
        'https://media.tenor.com/images/d2fa4d8a14db8b1301efe79146cd64eb/tenor.gif',
        'https://media.tenor.com/images/ddee55cec71038d1007fa33f4343c921/tenor.gif',
        'https://media.tenor.com/images/21fed1c94754d21acdbccd52adfb53d0/tenor.gif',
        'https://media.tenor.com/images/5fae48a5065440df87efb803cf8e43ce/tenor.gif',
        'https://media.tenor.com/images/6e4be7dcabb41ee76f2372f0492fc107/tenor.gif',
        'https://media.tenor.com/images/02b3ad0fb1d6aa77daeee0ace21d5774/tenor.gif',
        'https://media.tenor.com/images/29b22bb26ecc0943c95b9a1be81d3054/tenor.gif',
        'https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif',
        'https://media.tenor.com/images/8ec7bf76ee3381bf7f6ec4a63397cbf0/tenor.gif',
        'https://media.tenor.com/images/c9fba5642c0d4984d8c44c8cc62826cd/tenor.gif',
        'https://media.tenor.com/images/f2cef6ceb6f7d898142a423822fec28d/tenor.gif',
        'https://media.tenor.com/images/55d3a2536717546ae49c1e54af15f1b0/tenor.gif',
        'https://media.tenor.com/images/556f881d184f4dbfc4f99ae720273457/tenor.gif',
        'https://media.tenor.com/images/1e62124baa07326a20127730fd61a464/tenor.gif',
        'https://media.tenor.com/images/4b75a7e318cb515156bb7bfe5b3bbe6f/tenor.gif',
        'https://media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif',
        'https://media.tenor.com/images/1f9175e76488ebf226de305279151752/tenor.gif',
        'https://media.tenor.com/images/7788dae5026b45fc269c06b22c0bfad3/tenor.gif',
        'https://media.tenor.com/images/a23d2ec86610bd1dd026a07853992b57/tenor.gif',
        'https://media.tenor.com/images/ce8b8d26668bf7af8c336bf4f52a4f24/tenor.gif',
        'https://media.tenor.com/images/dd777838018ab9e97c45ba34596bb8de/tenor.gif',
        'https://media.tenor.com/images/8e75574d9a85f2e550ccbef62f291544/tenor.gif',
        'https://media.tenor.com/images/347f111da7827beb402fd9f208d79211/tenor.gif',
        'https://media.tenor.com/images/f9549d4734daeb128611104954e72185/tenor.gif',
        'https://media.tenor.com/images/4412c49ca4e96bc0489c89571a9e1857/tenor.gif',
        'https://media.tenor.com/images/bd3bb6290ccf67c8051448a3bd0a48fa/tenor.gif',
        'https://media.tenor.com/images/9fb52dbfd3b7695ae50dfd00f5d241f7/tenor.gif',
        'https://media.tenor.com/images/be2b3298bc9880b9ffcdc7a47635fff6/tenor.gif',
        'https://media.tenor.com/images/a23d2ec86610bd1dd026a07853992b57/tenor.gif'
    ]
    var kissfinal = rando_imgskiss[Math.floor(Math.random() * rando_imgskiss.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'kiss')) {
        let args = message.content.split(' ')
        const embedkiss = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`😘 ${message.author.toString()} ` + ' fait un baiser à ' + `**${args[1]}**`)
            .setImage(kissfinal)
            .setTimestamp()
            .setFooter("Kiss  ");
        message.channel.send(embedkiss);

        
    }


    var rando_imgscry = [
        'https://media.tenor.com/images/84bb22e3b7290269d926a9cfd1d065f0/tenor.gif',
        'https://media.tenor.com/images/5817dea73dd023ba1cc9b405f1577ebf/tenor.gif',
        'https://media.tenor.com/images/54b3dd3e7e227afb0dd31738c11c1ead/tenor.gif',
        'https://media.tenor.com/images/8b51f583ab3bb0580e80310affb45bfe/tenor.gif',
        'https://media.tenor.com/images/70478bb418236d9e2e852372b61570c6/tenor.gif',
        'https://media.tenor.com/images/5fed120e585f91aa2af29abb97251942/tenor.gif',
        'https://media.tenor.com/images/d089193ac77e74bb3f8e2f23c24d712d/tenor.gif',
        'https://media1.tenor.com/images/de730b51400ed4dfb66d04141ea79a2d/tenor.gif?itemid=7353410',
        'https://media.tenor.com/images/52c4bfbe3ae9fbfcbc0e2975e78b481c/tenor.gif',
        'https://media.tenor.com/images/47706b57d686be5ec9858a8af7203d11/tenor.gif',
        'https://media.tenor.com/images/eac8a7b4a0e7c468a31274b80c3958a1/tenor.gif',
        'https://media.tenor.com/images/ac8378dba1206383dc1ddc2a00c0183d/tenor.gif',
        'https://media.tenor.com/images/9c7f40fb033338d0e68116c6a25f474a/tenor.gif'
    ]
    var cryfinal = rando_imgscry[Math.floor(Math.random() * rando_imgscry.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'cry')) {
        const embedcry = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`😥 ${message.author.toString()} ` + ' est triste ')
            .setImage(cryfinal)
            .setTimestamp()
            .setFooter("Cry  ");
        message.channel.send(embedcry);
    }

    var rando_imgspunch = [
        'https://media.tenor.com/images/b11c79cf158d8c9bd6e721676b06ad73/tenor.gif',
        'https://media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif',
        'https://media.tenor.com/images/8a79543998d6878be573aab94ae86456/tenor.gif',
        'https://media.tenor.com/images/32d7dd9066896c0f82ea90b393f6ab6c/tenor.gif',
        'https://media.tenor.com/images/9c14d2d5dd918471954e5946166f3632/tenor.gif',
        'https://media.tenor.com/images/f48c44b3bd26f1f913db0f5a3b2e4e91/tenor.gif',
        'https://media.tenor.com/images/c0f5f67749d09f5e17442754a4700d2b/tenor.gif',
        'https://media.tenor.com/images/b561ad7377142adf365fe33f20fa45e8/tenor.gif',
        'https://media.tenor.com/images/26ed0cee60197a8329defae1f6586dd5/tenor.gif',
        'https://media.tenor.com/images/9000aca94295d6438ea941069e402e77/tenor.gif',
        'https://media.tenor.com/images/3d95f0ee1f044518cbfd3f4ee12d26bd/tenor.gif',
        'https://media.tenor.com/images/73c0fa4dba7c7b184bd61d567774fcf4/tenor.gif',
        'https://media.tenor.com/images/c3e19b66ddc54379c0498e8950f56eb7/tenor.gif'
    ]
    var punchfinal = rando_imgspunch[Math.floor(Math.random() * rando_imgspunch.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'punch')) {
        let args = message.content.split(' ')
        const embedpunch = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`👊 ${message.author.toString()} ` + ' donne à coup de poing à ' + `**${args[1]}**`)
            .setImage(punchfinal)
            .setTimestamp()
            .setFooter("Punch  ");
        message.channel.send(embedpunch);
    }

    var rando_imgsslap = [
        'https://media1.tenor.com/images/4fa82be21ffd18c99a9708ba209d56ad/tenor.gif?itemid=5318916',
        'https://media.tenor.com/images/57a57baa6b2b20deb81d22fbaef91d88/tenor.gif',
        'https://media.tenor.com/images/917c67606676adc6fd5623d2d6c76064/tenor.gif',
        'https://media.tenor.com/images/9a2c17416b01df4363c05702a489425b/tenor.gif',
        'https://media.tenor.com/images/45a27dba6f60c6a8deee02335dd5f1a0/tenor.gif',
        'https://media.tenor.com/images/c366bb3a5d7820139646d8cdce96f7a8/tenor.gif',
        'https://media.tenor.com/images/a107547117e0b8f22e00a3f39c40eb2f/tenor.gif',
        'https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif',
        'https://media.tenor.com/images/0e0075470c85f0546e0d0450455e77e8/tenor.gif',
        'https://media.tenor.com/images/4d8236f02c87a8d344f211cfb03c7c98/tenor.gif',
        'https://media.tenor.com/images/355bba4e1319ab0a4d6242be0570c077/tenor.gif',
        'https://media.tenor.com/images/cee6bc6b872818f319bfed1a067da7db/tenor.gif'
    ]
    var slapfinal = rando_imgsslap[Math.floor(Math.random() * rando_imgsslap.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'slap')) {
        let args = message.content.split(' ')
        const embedslap = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`✋ ${message.author.toString()} ` + ' donne une giffle à ' + `**${args[1]}**`)
            .setImage(slapfinal)
            .setTimestamp()
            .setFooter("Slap  ");
        message.channel.send(embedslap);
    }

    var rando_imgsbang = [
        'https://media.tenor.com/images/bf9e424b56cfc2e794c0b8d11b4b8d23/tenor.gif',
        'https://media.tenor.com/images/9e15e85e437fb00bec50f118ae501c2d/tenor.gif',
        'https://media.tenor.com/images/a6a5a85b2b566e8b881b12e58184fe72/tenor.gif',
        'https://media.tenor.com/images/1c4094733e1202609de548864168c0aa/tenor.gif',
        'https://media.tenor.com/images/a68d9e8b2a6a7ec692ab6ae51597a8c5/tenor.gif',
        'https://media.tenor.com/images/47ce268386a248187e55d9b6b087b7d0/tenor.gif',
        'https://media.tenor.com/images/0f1a8f1af6fa4f013d8c682a6a8b52f0/tenor.gif',
        'https://media.tenor.com/images/cf09a693375765ad4c3954f7ffc135ff/tenor.gif',
        'https://media.tenor.com/images/9d6e3b7b208edd1f4dd8dfbcbcda6809/tenor.gif',
        'https://media1.tenor.com/images/31afb64102cbbb40073ca553d1b4a2bb/tenor.gif?itemid=5106447',
        'https://media1.tenor.com/images/a1ff0a4ad219db2b4b979e5b9f09acf2/tenor.gif?itemid=16293436',
        'https://media.tenor.com/images/2e6553a2684b94b9fe43e3a9e0992be6/tenor.gif'
    ]
    var bangfinal = rando_imgsbang[Math.floor(Math.random() * rando_imgsbang.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'bang')) {
        let args = message.content.split(' ')
        const embedbang = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`🔫 ${message.author.toString()} ` + ' tire sur ' + `**${args[1]}**`)
            .setImage(bangfinal)
            .setTimestamp()
            .setFooter("Bang  ");
        message.channel.send(embedbang);
    }

    var rando_imgsblush = [
        'https://media.tenor.com/images/93f3a4a0bf424e96298064168ffa944a/tenor.gif',
        'https://media.tenor.com/images/773802d5cc29c88ec7f4b5e31211e54e/tenor.gif',
        'https://media.tenor.com/images/62eaf1d2b70f364b77e6dbaf1421c0cc/tenor.gif',
        'https://media.tenor.com/images/6bfc57bde155c401edc1d032de468cd6/tenor.gif',
        'https://media1.tenor.com/images/fb1aa76944c156acc494fff37ebdbcfa/tenor.gif?itemid=14521920',
        'https://media.tenor.com/images/52be0797a283d21927c3d4acff1b7bd3/tenor.gif',
        'https://media.tenor.com/images/6e75fae25292c10785d6c49e0c1a0679/tenor.gif',
        'https://media.tenor.com/images/5f737df63beee63857ce767a877547ff/tenor.gif',
        'https://media.tenor.com/images/4ceb6cc127387d8ea4e54e3566e8b646/tenor.gif',
        'https://media.tenor.com/images/135dbab59e4dced25cbf11f14ab350ae/tenor.gif',
        'https://media.tenor.com/images/93e6b1dd4e32d17734c22d51afb32d6a/tenor.gif',
        'https://media.tenor.com/images/49a52059fa56603433a5a990bbdd14df/tenor.gif',
        'https://media.tenor.com/images/a0e5c618d15a60a41a6228d7fbfecd48/tenor.gif',
        'https://media.tenor.com/images/3ea9d7c6803bdefbe9611f56dacad411/tenor.gif',
        'https://media.tenor.com/images/c8708616ae32591aa6556f6af3f50c33/tenor.gif',
        'https://media.tenor.com/images/40aefe5aee05f3dfb543161521f51da8/tenor.gif',
        'https://media.tenor.com/images/f73f13c2c2a22e034167b4749a852ec9/tenor.gif',
        'https://media.tenor.com/images/269c21977f7023a9fd2c1db4a6e6ed5e/tenor.gif'
      
    ]
    var blushfinal = rando_imgsblush[Math.floor(Math.random() * rando_imgsblush.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'blush')) {
        let args = message.content.split(' ')
        const embedblush = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`😊 ${message.author.toString()} ` + ` rougit`)
            .setImage(blushfinal)
            .setTimestamp()
            .setFooter("blush  ");
        message.channel.send(embedblush);


    }
    var rando_imgscookie = [
        'https://media1.tenor.com/images/c10b4e9e6b6d2835b19f42cbdd276774/tenor.gif?itemid=10644609',
        'https://media.tenor.com/images/19d865e2a377de7b8b32db0162bf32b4/tenor.gif',
        'https://media.tenor.com/images/9845efcd23e98bcb67185c2f0f229726/tenor.gif',
        'https://media.tenor.com/images/cb1e23e8e8ccc6934876368ada5a17ce/tenor.gif',
        'https://media.tenor.com/images/cb1e23e8e8ccc6934876368ada5a17ce/tenor.gif',
        'https://media.tenor.com/images/5fed120e585f91aa2af29abb97251942/tenor.gif',
        'https://media.tenor.com/images/589af38d6ecb368243f4a76b682b6b7f/tenor.gif',
        'https://media.tenor.com/images/d4f5487977432f55ef9bbc3d521dd6a6/tenor.gif',
        'https://media1.tenor.com/images/79a141d4c20c3cf98bcb290b8566e175/tenor.gif?itemid=4514802',
        'https://media.tenor.com/images/5252d012d6dd60f1d181c358f1f258b0/tenor.gif',
        'https://media.tenor.com/images/496662ea7cdd09db4a8815b4c7cfeb16/tenor.gif',
        'https://media.tenor.com/images/63f3879246da9c1a33e7b374a9216d09/tenor.gif',
        'https://media.tenor.com/images/15e2266d1aac7aad8a0b2533830f5815/tenor.gif',
        'https://media.tenor.com/images/eb797074412f9cc4b59db85609d9bb95/tenor.gif',
        'https://media.tenor.com/images/4a9454ecff636ca5a6369313048bf5ee/tenor.gif'
    ]
    var cookiefinal = rando_imgscookie[Math.floor(Math.random() * rando_imgscookie.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'cookie')) {
        let args = message.content.split(' ')
        const embedcookie = new Discord.MessageEmbed()
            .setTitle(' ')
            .setDescription(`🍪 ${message.author.toString()} ` + ' donne des cookies à ' + `**${args[1]}**`)
            .setImage(cookiefinal)
            .setTimestamp()
            .setFooter("Cookie  ");
        message.channel.send(embedcookie);
    }

    var rando_imgssmile = [
        'https://media.tenor.com/images/638a648136ae945f6150d674194d0cc8/tenor.gif',
        'https://media.tenor.com/images/bd549ebf694a537c2d376402be85f06b/tenor.gif',
        'https://media.tenor.com/images/f9b62fa809db163e57f5975ddaf9b054/tenor.gif',
        'https://media.tenor.com/images/b5f08ae7f50a00f33d0219648e3fde08/tenor.gif',
        'https://media.tenor.com/images/09c25d681122b9dfdd0710a20c4dfbbd/tenor.gif',
        'https://media.tenor.com/images/7cb5e535bcade89f2979cd3dd3bfde5a/tenor.gif',
        'https://media.tenor.com/images/7a15e5fa64b4b2b4dde8554339d3cfa0/tenor.gif',
        'https://media.tenor.com/images/7267401d66397aca395af6b543bfb989/tenor.gif',
        'https://media.tenor.com/images/f2624eff04dc3b2f84b8b3830fbdaa29/tenor.gif',
        'https://media.tenor.com/images/4ea5a1f32764091f5c433bf0b1c778d1/tenor.gif',
        'https://media.tenor.com/images/769fede93ec2f2293dadca1e0449eb50/tenor.gif',
        'https://media1.tenor.com/images/bea3f6e41c736db4a99c79c64c46104b/tenor.gif?itemid=4382407',
        'https://media.tenor.com/images/8c94985390b64dd1ceb127d085ebab43/tenor.gif',
        'https://media.tenor.com/images/5fc2ce81bf7e62d9fe181084d81c8962/tenor.gif',
        'https://media.tenor.com/images/8541813819e9e3c651e6d9baffe77a39/tenor.gif'
    ]
    var smilefinal = rando_imgssmile[Math.floor(Math.random() * rando_imgssmile.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'smile')) {
        let args = message.content.split(' ')
        const embedsmile = new Discord.MessageEmbed()
            .setTitle(' ')
            .setDescription(`🙂 ${message.author.toString()} ` + ` souri(e)`)
            .setImage(smilefinal)
            .setTimestamp()
            .setFooter("Smile  ");
        message.channel.send(embedsmile);
    }

    var rando_imgspout = [
        'https://media.tenor.com/images/207b883cfed8c70fb7489bb38372ebba/tenor.gif',
        'https://media.tenor.com/images/46c9b8da42a62778fb37f89513c8af0e/tenor.gif',
        'https://media.tenor.com/images/4217a276896fa6b73099cf84f136e795/tenor.gif',
        'https://media.tenor.com/images/cd97cc38633ba0d8d72feea5d66dbb33/tenor.gif',
        'https://media.tenor.com/images/011ec2a67e69cd48570bf530ce84016b/tenor.gif',
        'https://media.tenor.com/images/d0ec17c2a83af604847276fdead3d786/tenor.gif',
        'https://media.tenor.com/images/84e609c97fc79323c572baa4e8486473/tenor.gif',
        'https://media.tenor.com/images/383270cb087e9e64a0f6f7ce2bc71101/tenor.gif',
        'https://media.tenor.com/images/b4799bb28f437238eb253420639f4af6/tenor.gif',
        'https://media1.tenor.com/images/6125c9e6fb1dbb4fd23cf6db578702da/tenor.gif?itemid=14065051'
    ]
    var poutfinal = rando_imgspout[Math.floor(Math.random() * rando_imgspout.length)];
    if (!message.guild) return
    if (message.content.startsWith(prefix + 'pout')) {
        
        const embedpout = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`😠 ${message.author.toString()} ` + ' boude.')
            .setImage(poutfinal)
            .setTimestamp()
            .setFooter("Pout  ");
        message.channel.send(embedpout);
    }

    

    if (message.content.startsWith(prefix + "lc")) {
            

            var result = Math.floor((Math.random() * 100) + 1)
            
            const embedlove = new Discord.MessageEmbed()
                .setTitle('')
                .setDescription(`${message.author.toString()} + ** ${argsfinal} ** =__ ` + result + `%__ d'amour ❤`)
                .setTimestamp()
                .setFooter("Amour%  ");
            


            message.channel.send(embedlove);
            
    }

        

        
  
            
    
    /*
    
        var resultrand = Math.floor((Math.random() * 100) + 1)
        const embedrand = new Discord.MessageEmbed()
            .setTitle('')
            .setDescription(`${message.author.toString()} ` + Guild.members.random() + " " + resultrand + `%__ d'amour ❤`)
            .setImage()
            .setTimestamp()
            .setFooter('Amour%');
        if (!message.guild) return
            if (message.content.startsWith(prefix + "lc random")) {                      
                message.channel.send(embedrand);
            }
        
    */






}
)



client.on('message', message => {
    
    const args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + 'say')) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les droits pour utiliser cette commande !");
            message.delete()
            var saytext = args.join(" ");
            message.channel.send(saytext)
        }
} )
client.on("message", message =>{
  var date = new Date();
  var jour = date.getDay();
  var heure = date.getHours();
  var minutes = date.getMinutes();
  if(!message.guild) return
  if (message.content === prefix + "time"){
      message.channel.send('Il est ' + heure + 'h ' + minutes + 'm ' + message.author.toString());
  }
  if(!message.guild) return
  if (message.content === prefix + "invite"){
      message.author.send("**Voici le lien :** <https://discordapp.com/api/oauth2/authorize?client_id=696283416189993000&permissions=8&scope=bot>")
    
  }
})






client.on("message", message => {

    const embedhelp = new Discord.MessageEmbed()
        .setTitle(`🧾 __ ** La liste des commandes ** __ :`)
        .setDescription("\n __**Modération :**__\n`banmember`   _permet de ban une personne du serveur_\n`kickmember`   _permet de kick une personne du serveur_\n`clear`   _permet de clear des messages_\n __**Utiles :**__ \n`time`   _Le bot vous envoie l'heure_\n`def <mot>`   _Le bot vous envoie la définition_\n`ping`   _Le bot répond pour montrer qu'il marche_\n`say`   _Le bot repette ce que vous dites_\n`report`   _permet de report une personne_\n __**Fun :**__\n`hug`   _Permet de faire un calîn_\n`cheekkiss`   _Permet de faire un bisous sur la joue_\n`kiss`   _Permet de faire un baiser_\n`lc`   _Permet d'estimer le pourcentage d'amour d'une personne à une autre_\n`lc random`   _Coming soon..._\n`cry`   _Permet de pleurer_\n`punch`   _Permet de donner un coup de poing_\n`slap`   _Permet de donner une claque_\n`pat`   _Permet de carresser_\n`bang`   _Permet de tirer_\n`blush`   _Permet de rougir_\n`cookie`   _Permet de donner des cookies_\n`pout`   _Permet de bouder_")
        .setTimestamp()
        .setFooter('Help');

  if(!message.guild) return
  if (message.content === prefix + "help"){
      message.channel.send('📪 Les commandes vous ont été envoyez en MP');
      message.author.send(embedhelp)
  }

  if (!message.guild) return
  if (message.content === prefix + "help here") {
        message.channel.send(embedhelp)
  }
})


client.on('message', async (message) => {

  if (message.content.startsWith(prefix +'report')) {
    const raison = message.content.split(" ").slice(2)
    const args = message.content.split(" ")
    message.channel.send("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n> :no_entry: __**Report**__ : :no_entry:\n\n> "+ args[1] +" à été averti par "+ message.author.toString() +"\n\n> __Raison :__ `"+ raison +"`\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")


  }

  if (message.content.startsWith(prefix +'sond')) {
    const authorize = ["614052096857341952","594631985922703403"]
    if(!authorize.includes(message.author.id)) return message.channel.send(":x: Vous n'avez pas la permission");
      let args = message.content.split(' ')
      const sond = message.content.split(" ").slice(2)
    message.delete();
      message.channel.send(":no_entry:  __**SONDAGE**__ :no_entry: \n >  \n " + "> **" + sond +"**\n> \n ▬▬▬▬▬▬▬")
            .then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });

  }
})


client.on("message", message =>{ 
  if (message.content.startsWith(prefix +'clear')) {
    
    
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour utiliser cette commande !");
      const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
      var amount = args.join(' '); // Amount of messages which should be deleted
      var clearnbr = amount;
      clearnbr++;
      message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
        message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
      )})
      message.channel.send("`" + amount + ' messages supprimés`')
      
        
  }
}
)
function includesRealy(msg,str){
  return(
    msg.content.includes(str) ||
    msg.content.includes(str.toUpperCase()) ||
    msg.content.includes(str.toLowerCase())
  )
}

client.on('message', async (message) => {

 
  let role1 = '696815183355707392';
  if(message.content === prefix + "test") {
    message.channel.send("Hey ceci est un test !")

  }

  if(
    message.content.startsWith('bonjour') ||
    message.content.startsWith('salut') ||
    message.content.startsWith('hey') ||
    message.content.startsWith('coucou') ||
    message.content.startsWith('cc') ||
    message.content.startsWith('Yo') ||
    message.content.startsWith('hola')
  ){
    //message.channel.send("𝕭𝖔𝖓𝖏𝖔𝖚𝖗 " + message.author.toString() );
    message.react("👋");
  }
  if (message.content === prefix + 'ping') {
    message.channel.send('pong!');
  }

  if (message.content === 'CIV') {
    message.channel.send("Oui, je sais, c'est le meilleur collège !");
  } 
}
)


;const has= (a,b)=> {
  for(let c in a) {
      if(b.includes(a[c])) return c;
  } return false;
};
client.on('message', (message)=> {
  let badWords= ['putain', 'pute','chiennasse','enculer','tageule','boomer']
    isBad = has(badWords, message.content.toLowerCase())
  if (!message.guild) return
  if(isBad) {
      message.delete();
      message.channel.send("**Les gros mots sont interdits** " + message.author.toString());
      message.author.send(`Le mot **${badWords[isBad].toUpperCase()}** est interdit !`);
  }
  
}
)


client.login(token)