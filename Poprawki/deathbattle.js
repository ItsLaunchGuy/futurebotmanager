{
  "name": "deathbattle",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "NaPuE",
  "actions": [
    {
      "condition": "1",
      "comparison": "0",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Mention 1 user",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "0",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar2",
      "name": "Store Member Info"
    },
    {
      "url": "resources/deathbattle1.png",
      "storage": "1",
      "varName": "deathbattle",
      "name": "Create Image"
    },
    {
      "member": "0",
      "varName": "",
      "storage": "1",
      "varName2": "mavatar",
      "name": "Create Image from Avatar"
    },
    {
      "member": "1",
      "varName": "",
      "storage": "1",
      "varName2": "aavatar",
      "name": "Create Image from Avatar"
    },
    {
      "storage": "1",
      "varName": "mavatar",
      "width": "250",
      "height": "260",
      "name": "Resize Image"
    },
    {
      "storage": "1",
      "varName": "aavatar",
      "width": "250",
      "height": "260",
      "name": "Resize Image"
    },
    {
      "member": "0",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "displayn",
      "name": "Store Member Info"
    },
    {
      "storage": "1",
      "varName": "deathbattle",
      "storage2": "1",
      "varName2": "aavatar",
      "x": "358",
      "y": "134",
      "mask": "0",
      "name": "Draw Image on Image"
    },
    {
      "storage": "1",
      "varName": "deathbattle",
      "storage2": "1",
      "varName2": "mavatar",
      "x": "14",
      "y": "134",
      "mask": "0",
      "name": "Draw Image on Image"
    },
    {
      "storage": "1",
      "varName": "deathbattle",
      "x": "358",
      "y": "410",
      "font": "fonts/Asimov.fnt",
      "width": "103",
      "text": "${member.displayName}",
      "name": "Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "deathbattle",
      "x": "14",
      "y": "410",
      "font": "fonts/Asimov.fnt",
      "width": "107",
      "text": "${tempVars(\"displayn\")}",
      "name": "Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "deathbattle",
      "channel": "0",
      "varName2": "",
      "message": "",
      "name": "Send Image"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "health",
      "changeType": "0",
      "value": "100",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "health",
      "changeType": "0",
      "value": "100",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "myturn",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "storage": "1",
      "varName": "lastmsg",
      "changeType": "0",
      "value": "\"None\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "lastmsg2",
      "changeType": "0",
      "value": "\"None\"",
      "name": "Control Variable"
    },
    {
      "title": "",
      "author": "",
      "color": "#36369F",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "varName3": "embededit",
      "storage3": "1",
      "name": "Send Embed Message MOD"
    },
    {
      "time": "3",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "myturn",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "40",
      "iffalse": "2",
      "iffalseVal": "38",
      "name": "Check Member Data"
    },
    {
      "storage": "1",
      "varName": "damage1",
      "min": "1",
      "max": "25",
      "name": "Generate Random Number"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "health",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "mhealth",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "health",
      "changeType": "0",
      "value": "tempVars(\"mhealth\") - tempVars(\"damage1\")",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "myturn",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "health",
      "defaultVal": "100",
      "storage": "1",
      "varName2": "mhealth",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "health",
      "defaultVal": "100",
      "storage": "1",
      "varName2": "health",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "health",
      "comparison": "3",
      "value": "1",
      "iftrue": "2",
      "iftrueVal": "50",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Data"
    },
    {
      "title": "",
      "author": "",
      "color": "#36393F",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${tempVars(\"lastmsg2\")}\n==> ${member} (${tempVars(\"health\")}) did **${tempVars(\"damage1\")}** damage to ${mentionedUser} (${tempVars(\"mhealth\")})",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "lastmsg",
      "changeType": "0",
      "value": "\"==> ${member} (${tempVars(\"health\")}) did **${tempVars(\"damage1\")}** damage to ${mentionedUser} (${tempVars(\"mhealth\")})\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embededit",
      "storage2": "1",
      "varName2": "embed",
      "name": "Edit Embed"
    },
    {
      "call": "24",
      "name": "Jump to Action"
    },
    {
      "storage": "1",
      "varName": "damage1",
      "min": "1",
      "max": "25",
      "name": "Generate Random Number"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "health",
      "defaultVal": "100",
      "storage": "1",
      "varName2": "health",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "health",
      "changeType": "0",
      "value": "tempVars(\"health\") - tempVars(\"damage1\")",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "myturn",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "health",
      "defaultVal": "100",
      "storage": "1",
      "varName2": "health",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "health",
      "defaultVal": "100",
      "storage": "1",
      "varName2": "mhealth",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "health",
      "comparison": "3",
      "value": "1",
      "iftrue": "2",
      "iftrueVal": "50",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Data"
    },
    {
      "title": "",
      "author": "",
      "color": "#36393F",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${tempVars(\"lastmsg\")}\n<== ${mentionedUser} (${tempVars(\"mhealth\")}) did **${tempVars(\"damage1\")}** damage to ${member} (${tempVars(\"health\")})",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "lastmsg2",
      "changeType": "0",
      "value": "\"<== ${mentionedUser} (${tempVars(\"mhealth\")}) did **${tempVars(\"damage1\")}** damage to ${member} (${tempVars(\"health\")})\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embededit",
      "storage2": "1",
      "varName2": "embed",
      "name": "Edit Embed"
    },
    {
      "call": "24",
      "name": "Jump to Action"
    },
    {
      "title": "",
      "author": "",
      "color": "#36393F",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "health",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "mhealth",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "health",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "health",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "health",
      "comparison": "3",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Data"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${member} (${tempVars(\"health\")}) has KNOCKED ${mentionedUser} (0)",
      "name": "Set Embed Description"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${mentionedUser} (${tempVars(\"mhealth\")}) has KNOCKED ${member} (0)",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embededit",
      "storage2": "1",
      "varName2": "embed",
      "name": "Edit Embed"
    }
  ]
}