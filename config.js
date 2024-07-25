const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254757567093";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_21_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICA5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHSndHcTFUVERDb3dsTG5peUQvU3J0MXlEa2F3QTBDa2VVczJrdTNuUW44PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc1NzU2NzA5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTlCRUI3NDQ1OTI2NDk1NzZDQjExQ0Q2RkI5MTk4QzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTAyOTE2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk41NFhvZHp6VEdDZUNMY0pOQ2w3N0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjA0ZWNiYWUtOTdhMi00YTZlLWE1ZjAtYzQwY2FhZDI4Yzg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMTc1LFxuICAgICAgNDQsXG4gICAgICAyNTUsXG4gICAgICAyNDksXG4gICAgICAyMDMsXG4gICAgICAxODQsXG4gICAgICAxODEsXG4gICAgICAyMzMsXG4gICAgICAzNixcbiAgICAgIDkxLFxuICAgICAgMjMyLFxuICAgICAgNjUsXG4gICAgICAxMDksXG4gICAgICAxMjIsXG4gICAgICA2MyxcbiAgICAgIDEzMyxcbiAgICAgIDEwNSxcbiAgICAgIDIyNCxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTI0LFxuICAgICAgMTEsXG4gICAgICAxMjgsXG4gICAgICAyMzAsXG4gICAgICAxNjksXG4gICAgICAxNSxcbiAgICAgIDIzMSxcbiAgICAgIDE1MSxcbiAgICAgIDIzMSxcbiAgICAgIDI0OSxcbiAgICAgIDEyLFxuICAgICAgNDksXG4gICAgICAxMDAsXG4gICAgICAxNCxcbiAgICAgIDMzLFxuICAgICAgNDgsXG4gICAgICAyNDMsXG4gICAgICAwLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldLRE5LOEMzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTc1NjcwOTM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdyDDgmvEqyBEw7hcIixcbiAgICBcImxpZFwiOiBcIjEyMzg1NDQ5MjAzNzMwMToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORzdnbmtRdWM2SXRRWVlDaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9tRzA4ektqQTlpSjlKUmNNTEpPRU1ydHhodXhXbU5lODg4Tm1sd3czM0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVFFtK2RYZ0xtM1VOT3E0cUpRTVRMZ0d3RWg2Skh5a0t4YXl3UkF3Rys4MEc5bkYvelhKOSsxV3A4NmpybVFZVThyald4czN2V3E1ZnRBNDliUzhKQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQVVrNXhVdmN6UE9RNCtVTEwwTy8zbVNpNnVlWFpFZVY3TXlHVGNZVmRBdFJEMGYrbUs5ZzFrcG9FbG55a05ETGtwUUtKN0J3MUdzZlRudFZuandZakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU3NTY3MDkzOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MDI5MDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKcXFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpxcS5qc29uIjogIntcImtleURhdGFcIjpcIlZoeUkwMCtMZWFGMkgrOFVPZlFkSVl0dWxuRjhUeHc2NWVHS21zZ0k4OVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUzNzk1NzkzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
