const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="kenya,Nairobi."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || ""
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/BxXB834YgV8JorX5tCDEEM";
global.website=process.env.GURL || "https://whatsapp.com/BxXB834YgV8JorX5tCDEEM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254757567093" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,254757567093";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254757567093";


 




//========================= [ BOT SETTINGS ] =========================\\
global.flush = process.env.FLUSH || "true"; // Make it "true" if bot not responed
global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles
global.waPresence = process.env.WAPRESENCE  ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
global.MsgsInLog = process.env.MSGS_IN_LOG || "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
 

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  || global.read_status_from || "254757567093";




















module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/



  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©KUSHAN²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "DARK SHAN",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "DARK SHAN YT",
  ownername:process.env.OWNER_NAME|| "KUSHAN",





  sessionName:process.env.SESSION_ID || "SUHAIL_11_44_01_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0ptVllLVDBEd3RMNlhTcXlEanNuSXZhbHFwWjI2WVYxd0RIVlNBaFUyUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInVpSG1nZDMzWjJJbXppQ3UrdGhkdUNnVEozSGNob1lnaXViRkRZUmFVVDg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0VvdERFaXI4ek4rcmVQK1hYM2VoNUlteHZGN0s1SDJrNTA4WnJRTTRYOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIitCUHZhVTNMeWlWK0RRUlJRb29SMWljNld5ZUpUalRjUGdSWER2Nnh5ak09XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkR1WjkzQmxheTV2QlVaTStRTTNWUEc3MlN5Mi9oUnpkL09VeTc4RzNsUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImdDTkRDWERRK3V0ZWRmMU5nK3NXRnFsY2RLYnZMR3QvZTlKNlVJT1dpd2s9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4QXZjMmxKNk9zOXRoSFhjZFEwcFlCblp0Q2NEVlVsTWk4eEp2WWZ2ZG53PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTklRMEJIaFBld1VzbHFMUVhmVGFmWnBWZEhLL2R1c3BDcWRwUVF6dlNHRT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJyUjBNeVBSblllSjZncDVkOW5WdkFqckZmWi9OSDZ0VVhzNmNYdWNLMWtpZlI1ZzlGTVlvYWUwUWdUSlpDblFHK05kV3lvOEdqTk12UlJLajI2azJoUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTQyLFwiYWR2U2VjcmV0S2V5XCI6XCJUVjA5S3RKaXk4TzlJbFIyTzVsR3RFZUdXbTcvcjlLZllzZVRPZkQrMXpzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzU3NTY3MDkzQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkE0NjMxNDUxOURGODk5Qzc2OEVCRTM0ODE2QUMzNUM1XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY1Mjg2ODJ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzU3NTY3MDkzQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjkyQkNDMEU4OTMxOEExOUI2QjE5MTE1NUQ5QzA5MTM4XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY1Mjg2ODJ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzU3NTY3MDkzQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjhGRUY0RjQ0MjAyMTE3RURDRDNDQTk3NDk1NjE1REY5XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY1Mjg2ODR9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzU3NTY3MDkzQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkRGNUI0N0U2NzM1NjZGODUzMTIwMDc3NjEzNTRDOUI1XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY1Mjg2ODR9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJQZmI2TF9RMlI1YXlvVEROd0c1VG13XCIsXCJwaG9uZUlkXCI6XCIzOTdlMjM3ZC1lNGY5LTQ0MGUtYTEzYS0xMzRhYzk1NmFlZDFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjIwb2VxU1grTktjeWVVcE15MjVpY2krK2NWST1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieGlZdFREOHpiWU1xdC9JT3dLd2hhRGJFNHpBPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQL2N5OG9GRUtLZjNxMEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiaHc3enQzc20zU28vRlQ1ejRDUHdYd0xJWERpalA3eWEwZ3I0WjdLR3ZVND1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImQyNjVSRmZmUjE0c1kwaDEwNDJ1QlJsNmxTdkVROFVvUUF5enVqWTh4c2lMY2xMbXdMdXN3ZnBtVkQrNXl6VWw5ZSswQTVnQno5RVZlMzQxaDFzaURBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwieVAvcDVKWkJHWmxHMnVpb0g4M290U05nVG1nTk0vNG01RlFxTGxsdURaY01wdkpZdTNFUnpiUXE2VnJCV2ljRFJHbit4QVkzMCswTjJZRGVUcGVWaFE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI1NDc1NzU2NzA5Mzo3NkBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiTXcgw4Jrw68gRMO4XCIsXCJsaWRcIjpcIjE0NTI2OTA4MTUzNDY0Njo3NkBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3NTc1NjcwOTM6NzZAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWWNPODdkN0p0MHFQeFUrYytBajhGOEN5Rnc0b3orOG10SUsrR2V5aHIxT1wifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDY1Mjg2NzgsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBS2tRXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2tRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRUo3dzdlcEpKZ0IxSHBteDFieEFoNkxLd1RWenFWbVdKQ0Z0U1FxV1RGST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDk4NjA3MjMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDY1Mjg2ODAwNDdcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",





  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "", 
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,



  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
