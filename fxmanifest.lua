fx_version 'cerulean'
games { 'gta5' }

ui_page 'html/index.html'

client_script 'client.lua'
server_script 'server.lua'

files {
	'html/index.html',
	'html/style.css',
	'html/script.js'
}

exports {
	'SendAlert',
	'RemoveAlert'
}

server_exports {
	'SendAlert',
	'RemoveAlert'
}
