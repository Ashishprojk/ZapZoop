module.exports = {
name: "uniemoji",
code: `
\`$get[name]\`

$let[name;$randomtext[😄;😃;😀;😊;☺;😉;😍;😘;😚;😗;😙;😜;😝;😛;😳;😁;😔;😌;😒;😞;😣;😢;😂;😭;😪;😥;😰;😅;😓;😩;😫;😨;😱;😠;😡;😤;😖;😆;😋;😷;😎;😴;😵;😲;😟;😦;😧;😈;👿;😮;😬;😐;😕;😯;😶;😇;😏;😑;👲;👳;👮;👷;💂;👶;👦;👧;👨;👩;👴;👵;👱;👼;👸;😺;😸;😻;😽;😼;🙀;😿;😹;😾;👹;👺;🙈;🙉;🙊;💀;👽;💩;🔥;✨;🌟;💫;💥;💢;💦;💧;💤;💨;👂;👀;👃;👅;👄;👍;👎;👌;👊;✊;✌;👋;✋;👐;👆;👇;👉;👈;🙌;🙏;☝;👏;💪;🚶;🏃;💃;👫;👪;👬;👭;💏;💑;👯;🙆;🙅;💁;🙋;💆;💇;💅;👰;🙎;🙍;🙇;🎩;👑;👒;👟;👞;👡;👠;👢;👕;👔;👚;👗;🎽;👖;👘;👙;💼;👜;👝;👛;👓;🎀;🌂;💄;💛;💙;💜;💚;❤;💔;💗;💓;💕;💖;💞;💘;💌;💋;💍;💎;👤;👥;💬;👣;💭;🐶;🐺;🐱;🐭;🐹;🐰;🐸;🐯;🐨;🐻;🐷;🐽;🐮;🐗;🐵;🐒;🐴;🐑;🐘;🐼;🐧;🐦;🐤;🐥;🐣;🐔;🐍;🐢;🐛;🐝;🐜;🐞;🐌;🐙;🐚;🐠;🐟;🐬;🐳;🐋;🐄;🐏;🐀;🐃;🐅;🐇;🐉;🐎;🐐;🐓;🐕;🐖;🐁;🐂;🐲;🐡;🐊;🐫;🐪;🐆;🐈;🐩;🐾;💐;🌸;🌷;🍀;🌹;🌻;🌺;🍁;🍃;🍂;🌿;🌾;🍄;🌵;🌴;🌲;🌳;🌰;🌱;🌼;🌐;🌞;🌝;🌚;🌑;🌒;🌓;🌔;🌕;🌖;🌗;🌘;🌜;🌛;🌙;🌍;🌎;🌏;🌋;🌌;🌠;⭐;☀;⛅;☁;⚡;☔;❄;⛄;🌀;🌁;🌈;🌊;🎍;💝;🎎;🎒;🎓;🎏;🎆;🎇;🎐;🎑;🎃;👻;🎅;🎄;🎁;🎋;🎉;🎊;🎈;🎌;🔮;🎥;📷;📹;📼;💿;📀;💽;💾;💻;📱;☎;📞;📟;📠;📡;📺;📻;🔊;🔉;🔈;🔇;🔔;🔕;📢;📣;⏳;⌛;⏰;⌚;🔓;🔒;🔏;🔐;🔑;🔎;💡;🔦;🔆;🔅;🔌;🔋;🔍;🛁;🛀;🚿;🚽;🔧;🔩;🔨;🚪;🚬;💣;🔫;🔪;💊;💉;💰;💴;💵;💷;💶;💳;💸;📲;📧;📥;📤;✉;📩;📨;📯;📫;📪;📬;📭;📮;📦;📝;📄;📃;📑;📊;📈;📉;📜;📋;📅;📆;📇;📁;📂;✂;📌;📎;✒;✏;📏;📐;📕;📗;📘;📙;📓;📔;📒;📚;📖;🔖;📛;🔬;🔭;📰;🎨;🎬;🎤;🎧;🎼;🎵;🎶;🎹;🎻;🎺;🎷;🎸;👾;🎮;🃏;🎴;🀄;🎲;🎯;🏈;🏀;⚽;⚾;🎾;🎱;🏉;🎳;⛳;🚵;🚴;🏁;🏇;🏆;🎿;🏂;🏊;🏄;🎣;☕;🍵;🍶;🍼;🍺;🍻;🍸;🍹;🍷;🍴;🍕;🍔;🍟;🍗;🍖;🍝;🍛;🍤;🍱;🍣;🍥;🍙;🍘;🍚;🍜;🍲;🍢;🍡;🍳;🍞;🍩;🍮;🍦;🍨;🍧;🎂;🍰;🍪;🍫;🍬;🍭;🍯;🍎;🍏;🍊;🍋;🍒;🍇;🍉;🍓;🍑;🍈;🍌;🍐;🍍;🍠;🍆;🍅;🌽;🏠;🏡;🏫;🏢;🏣;🏥;🏦;🏪;🏩;🏨;💒;⛪;🏬;🏤;🌇;🌆;🏯;🏰;⛺;🏭;🗼;🗾;🗻;🌄;🌅;🌃;🗽;🌉;🎠;🎡;⛲;🎢;🚢;⛵;🚤;🚣;⚓;🚀;✈;💺;🚁;🚂;🚊;🚉;🚞;🚆;🚄;🚅;🚈;🚇;🚝;🚋;🚃;🚎;🚌;🚍;🚙;🚘;🚗;🚕;🚖;🚛;🚚;🚨;🚓;🚔;🚒;🚑;🚐;🚲;🚡;🚟;🚠;🚜;💈;🚏;🎫;🚦;🚥;⚠;🚧;🔰;⛽;🏮;🎰;♨;🗿;🎪;🎭;📍;🚩;⬆;⬇;⬅;➡;🔠;🔡;🔤;↗;↖;↘;↙;↔;↕;🔄;◀;▶;🔼;🔽;↩;↪;ℹ;⏪;⏩;⏫;⏬;⤵;⤴;🆗;🔀;🔁;🔂;🆕;🆙;🆒;🆓;🆖;📶;🎦;🈁;🈯;🈳;🈵;🈴;🈲;🉐;🈹;🈺;🈶;🈚;🚻;🚹;🚺;🚼;🚾;🚰;🚮;🅿;♿;🚭;🈷;🈸;🈂;Ⓜ;🛂;🛄;🛅;🛃;🉑;㊙;㊗;🆑;🆘;🆔;🚫;🔞;📵;🚯;🚱;🚳;🚷;🚸;⛔;✳;❇;❎;✅;✴;💟;🆚;📳;📴;🅰;🅱;🆎;🅾;💠;➿;♻;♈;♉;♊;♋;♌;♍;♎;♏;♐;♑;♒;♓;⛎;🔯;🏧;💹;💲;💱;©;®;™','〽;〰;🔝;🔚;🔙;🔛;🔜;❌;⭕;❗;❓;❕;❔;🔃;🕛;🕧;🕐;🕜;🕑;🕝;🕒;🕞;🕓;🕟;🕔;🕠;🕕;🕖;🕗;🕘;🕙;🕚;🕡;🕢;🕣;🕤;🕥;🕦;✖;➕;➖;➗;♠;♥;♣;♦;💮;💯;✔;☑;🔘;🔗;➰;🔱;🔲;🔳;◼;◻;◾;◽;▪;▫;🔺;⬜;⬛;⚫;⚪;🔴;🔵;🔻;🔶;🔷;🔸;🔹]]

$cooldown[20s;]`}