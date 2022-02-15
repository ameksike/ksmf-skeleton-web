/*
 * @author		Antonio Membrides Espinosa
 * @email		tonykssa@gmail.com
 * @date		20/08/2021
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
const KsMf = require('ksmf');
class SecurityModule extends KsMf.app.Module {
    /**
     * @description Define your custom url
     *              form more information see: https://github.com/ameksike/ksmf/wiki/Routes
     */
    initConfig() {
        //... prefix:   /api/v1/security
        const prefix = "/api/v1" + this.prefix;

        this.routes = [{
            // oauth authorization code: step 1
            route: prefix + "/oauth/connected",
            controller: 'DefaultController',
            action: 'oauthConnect',
            method: 'post'
        }, {
            // oauth client credential
            route: prefix + "/oauth/option",
            controller: 'DefaultController',
            action: 'oauthOption',
            method: 'get'
        }];
    }

}
module.exports = SecurityModule;