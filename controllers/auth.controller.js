const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const pool = require('../db')


const generateJwt = (id, username) => {
    return jwt.sign(
        {id, username},
        secret
    )
}

class AuthController {
    async register(req, res) {

        try {
            
            let { username, password} = req.body

            if (!password || password === "") {
                return res.status(400).json({message: "password is empty"})
            }

            const candidate = await pool.query('SELECT * FROM person WHERE name=$1', [username])
            if (candidate.rows[0]) {
                return res.status(400).json({message: "user already registered"})
            }

            const hashPassword = await bcrypt.hash(password, 5)
            let user = await pool.query('INSERT INTO person(name, password) values($1, $2) RETURNING *', [username, hashPassword])
            user = user.rows[0]

            const token = generateJwt(user.id, user.name)
            return res.json({token})

        } catch (error) {
            res.status(400).json({message: 'error', error})
            console.log(error);
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