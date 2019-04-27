const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `h!mesajküçült= Mesajınızı küçültür. \nh!mesajdöndür Mesajınızı döndürür. \nh!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \nh!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \nh!banned = Dene ve Gör! \nh!kahkaha = Kahkaha Atarsınız \nh!herkesebendençay = Herkese Çay Alırsınız. \nh!koş = Koşarsınız.\nh!çayiç = Çay İçersiniz. \nh!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nh!çayaşekerat = Çaya Şeker Atarsınız. \nh!yumruk-at = Yumruk Atarsınız. \nh!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Kullanıcı Komutları**", `h!tavsiye= Bot hakkındaki tavsiyelerinizi bildirebilirsiniz.\nh!report = İstediğiniz Kullanıcıyı Reportlarsınız. \nh!başvuru Başvuru için daha güzel bir görünüm sağlar. \nh!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \nh!yaz = Bota İsediğinizi Yazdırırsınız. \nh!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \nh!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \nh!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nh!avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Oyun Komutları**", `h!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `h!sunucu-kur= Daha güzel bir sunucu görünümü için düzenli odalar sağlar. \nh!otorol= Sunucuya gelen üyelere otomatik rol verir. \nh!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nh!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nh!unban = İstediğiniz Kişinin Yasağını Açar. \nh!sustur = İstediğiniz Kişiyi Susturur. \nh!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \nh!oylama = Oylama Açar. \nh!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "h!yardım = BOT Komutlarını Atar. \nh!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nh!ping = BOT Gecikme Süresini Söyler. \nh!davet = BOT Davet Linkini Atar. \nh!istatistik = BOT İstatistiklerini Gösterir.")
  .setFooter('HazelBot [ BETA v0.2.5 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
