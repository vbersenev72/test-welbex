const pool = require('../db')

class PostController {
    async create(req, res) {
        try {
            const {text, author} = req.body

            const date = new Date()
            const post = await pool.query('INSERT INTO post(data, person_id, date) values($1, $2, $3, $4) RETURNING *', [text, author, date] )
            return res.json({message: "post succesfully created", post: post.rows[0]})

        } catch (error) {
            return res.status(400).json({message: "error", error})
        }
    }

    async update(req, res) {
        try {
            
        } catch (error) {
            
        }
    }

    async delete(req, res) {
        try {
            
        } catch (error) {
            
        }
    }

    async getAll(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
}


module.exports = new PostController()