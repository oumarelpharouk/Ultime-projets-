const axios = require('axios');

const Prefixes = [
  '/ai',
  'horuto',
  'sakura',
  '+ai',
  'préscilia',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply(" 📝𝙃𝙊𝙍𝙐𝙏𝙊📝\n-------------\n 𝐀𝐒𝐊 𝐌𝐄 𝐘𝐎𝐔𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍 𝐏𝐋𝐄𝐀𝐒𝐄 ......?   );
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `📝𝙃𝙊𝙍𝙐𝙏𝙊 📝
______________________________  
${answer}
________________________________ ✏️`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
