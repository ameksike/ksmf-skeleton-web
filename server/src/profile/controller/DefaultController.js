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

    init() {
        this.logger = this.helper.get('logger');
    }
    /**
     * @description get user profile data
     *              see https://jsonplaceholder.typicode.com/
     * @param {OBJECT} req 
     * @param {OBJECT} res 
     * @param {OBJECT} next 
     */
    async list(req, res, next) {
        try {
            const token = req.header('token');
            const url = this.opt.env.URL_API;

            const response = await axios({
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                url: url + "/users"
            });

            res.json(response.data);

        } catch (error) {
            this.logger.error('list', error);
            res.status(404).json({
                message: error.message,
                name: error.name
            });
        }
    }

}
module.exports = DefaultController;