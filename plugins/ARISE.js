import fs from 'fs';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let img = "https://i.imgur.com/qheNRfe.jpeg";
    let forwardMessage = `𝐂𝐚𝐮𝐬𝐞 𝐭𝐡𝐞 𝐰𝐞𝐚𝐤 𝐡𝐚𝐯𝐞 𝐧𝐨 𝐫𝐢𝐠𝐡𝐭𝐬 🫱

_𝙺𝚒𝚗𝚍𝚕𝚢 𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝙲𝚑𝚊𝚗𝚗𝚎𝚕!_
> 𝙳𝚘𝚗𝚝 𝚏𝚘𝚛𝚐𝚎𝚝 𝚝𝚘 𝚌𝚕𝚒𝚌𝚔 𝚝𝚑𝚎 𝚕𝚒𝚗𝚔 🔗 𝚋𝚎𝚕𝚘𝚠🫡:

https://chat.whatsapp.com/GQlWh6EUV2MA0F4BFysGgt`;
    let url = "https://chat.whatsapp.com/GQlWh6EUV2MA0F4BFysGgt";
    let murl = "https://instagram.com/abraham.dwamena.182";
    let hash = global.botname;
    let audioUrl = "https://cdn.ironman.my.id/q/DDEFR.mp4";

    let doc = {
      image: { url: img },
      caption: forwardMessage,
      contextInfo: {
        externalAdReply: {
          title: "↺ |◁ II ▷| ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
          showAdAttribution: true
        }
      }
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });
    await conn.sendMessage(
      m.chat,
      { audio: { url: audioUrl }, mimetype: 'audio/mpeg', ptt: true },
      { quoted: m }
    );
  } catch (err) {
    throw '*Error!*';
  }
};

handler.customPrefix = /^(Arise|Ab|bot|test)$/i;
handler.command = new RegExp();

export default handler;
