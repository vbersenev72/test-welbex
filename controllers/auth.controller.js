const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')


class AuthController {
    async register(req, res) {

        try {
            res.json('ok')
        } catch (error) {
            res.status(400).json({message: 'error', error})
        }

    }

    async login(req, res) {

        try {

        } catch (error) {
            res.status(400).json({message: 'error', error})
        }

    }

    async login(req, res) {

        try {

        } catch (error) {
            res.status(400).json({message: 'error', error})
        }

    }


}

module.exports = new AuthController()