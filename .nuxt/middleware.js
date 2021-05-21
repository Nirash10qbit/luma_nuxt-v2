const middleware = {}

middleware['settings'] = require('..\\middleware\\settings.js')
middleware['settings'] = middleware['settings'].default || middleware['settings']

middleware['verified'] = require('..\\middleware\\verified.js')
middleware['verified'] = middleware['verified'].default || middleware['verified']

export default middleware
