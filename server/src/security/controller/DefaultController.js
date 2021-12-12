/*
 * @author		Antonio Membrides Espinosa
 * @email		tonykssa@gmail.com
 * @date		20/08/2021
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
const KsMf = require('ksmf');
const axios = require('axios');
const qs = require('qs');

class DefaultController extends KsMf.app.Controller {

    /**
     * @description demo custom action
     * @param {OBJECT} req 
     * @param {OBJECT} res 
     */
    async oauthConnect(req, res) {
        res.json({
            action: 'oauthConnect',
            options: this.opt
        });
    }

    /**
     * @description demo custom action
     * @param {OBJECT} req 
     * @param {OBJECT} res 
     */
    async oauthApikey(req, res) {
        res.json({
            action: 'oauthApikey',
            options: this.opt
        });
    }
}
module.exports = DefaultController;