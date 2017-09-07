﻿'use strict'

var _ = require('lodash')
var headers = require('./headers')
var patch = require('./patch')
var serialize = require('./serialize')
var deserialize = require('./deserialize')
var removeRemoteMethods = require('./removeRemoteMethods')
var create = require('./create')
var update = require('./update')
var del = require('./delete')
var relationships = require('./relationships')
var querystring = require('./querystring')
var logger = require('../../utils/logger')('components:response');

module.exports = function (app, options) {
    var defaultOptions = {
        restApiRoot: '/api',
        enable: true,
        foreignKeys: true
    }
    options = options || {}
    options = _.defaults(options, defaultOptions)

    if (!options.enable) {
        logger.info('Disabled')
        return
    }
    logger.info('Started')
    options.logger = logger
    headers(app, options)
    removeRemoteMethods(app, options)
    patch(app, options)
    serialize(app, options)
    deserialize(app, options)
    relationships(app, options)
    create(app, options)
    update(app, options)
    del(app, options)
    querystring(app, options)
}
