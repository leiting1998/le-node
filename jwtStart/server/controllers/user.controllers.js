const { jwtKey } = require('../config');
const jwt = require('jsonwebtoken');

module.exports = {
    login(ctx) {
        const user = ctx.request.body;
        if (user.email === 'leiting@hh.com' && user.password === '123456') {
            const token = jwt.sign(         // create token
                {
                    email: user.email,
                    userId: user._id
                },
                jwtKey,
                {
                    expiresIn: "1h"
                }
            );

            ctx.status = 200;
            ctx.body = { jsonwebtoken: token, message: 'Login Successful.' };
        } else {
            ctx.status = 401;
            ctx.body = { message: 'Login Failed' };           
        }
    },

    update(ctx) {
        console.log(ctx.params)
        if (ctx.params.userId === '110') {
            ctx.status = 200;
            ctx.body = { message: 'Update successful.' };
        } else {
            ctx.status = 401;
            ctx.body = { message: 'Update Failed.' };
        }
        
    },

    delete(ctx) {
        if (ctx.params.userId === '110') {
            ctx.status = 200;
            ctx.body = { message: 'Delete successful.' };
        } else {
            ctx.status = 401;
            ctx.body = { message: 'Delete Failed.' };
        }   
    }
}