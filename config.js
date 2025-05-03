const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogbangoodluck07@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋_𝕄`" 


global.devs = "2349125637807" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348167893138";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_37_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICA3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICA1MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUWlvOEV3VTNRZS9wSVd3cHVFUDhEcmlzQWVTcGZZeXJPQWpmcVExTU1OTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidjN4NzRaRDNRRHlBWDY4S2FSeHdSQVwiLFxuICBcInBob25lSWRcIjogXCI4NGFmZDJiYi03ZWViLTRlOTYtOTRhYS00YzFmMmY5NDc2MzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTUxLFxuICAgICAgMTkwLFxuICAgICAgNjMsXG4gICAgICA1NixcbiAgICAgIDEyLFxuICAgICAgMjQ2LFxuICAgICAgMzgsXG4gICAgICAyMDcsXG4gICAgICAyMDUsXG4gICAgICA5OCxcbiAgICAgIDkzLFxuICAgICAgMjQ3LFxuICAgICAgMTE0LFxuICAgICAgMjM2LFxuICAgICAgMjIwLFxuICAgICAgMjgsXG4gICAgICAyNTAsXG4gICAgICAyMDksXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAxNTQsXG4gICAgICAyMTEsXG4gICAgICAxODIsXG4gICAgICAxMTcsXG4gICAgICAxNzQsXG4gICAgICA4LFxuICAgICAgMjI0LFxuICAgICAgNDYsXG4gICAgICA2LFxuICAgICAgNTYsXG4gICAgICAzMixcbiAgICAgIDExOSxcbiAgICAgIDYzLFxuICAgICAgNDMsXG4gICAgICAzLFxuICAgICAgMjQ0LFxuICAgICAgMjI1LFxuICAgICAgNzEsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDFUTlQ4UzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjU2Mzc4MDc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjk1NDU2MzM3Mzg5MTQ6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdUEvdW9GRU9mZzJjQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImg4OGpvMjg4azRqM1MyQlpBelJ6WXNhLzFUZjU5d3hSVkFYejg0dHJXZ2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTjZXWlhFRXlWZHhmNnJlVjVtejB0NnkvUE9WMEEweW55RHY1eVRpbmEwREpBUHVveHFhVFQ1Q0xZWUJtKzk4Rk1uckVSTlZCdkZvMzlCQXI3UmtRQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSTRxRm04RjcrT2J4SFlvTW9udjB2ZmJuRDNxakxFWVR0aWk3NnB3N0tVZFJIQ3VlN1d5aDFCWmsyVEIrdHM4cEJWYUcweDV5WmNNZWZydFdKc0V6QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNTYzNzgwNzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2MzAxMDM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1FGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqcmgzVEduSlBPaW5SWlFPUk9zRmZuVHREN0pxM0J1RG9GaEVGZnE1cWlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NjY1Mzk3ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjMwMTAzNjM2OFwifSIKfQ======"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔾𝕀𝕊𝕋_𝕄",
  packname: process.env.PACK_NAME || "𝔾𝕀𝕊𝕋_𝕄",
  botname : process.env.BOT_NAME  || "`𝔾𝕀𝕊𝕋_𝕄`",
  ownername:process.env.OWNER_NAME|| "`𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
