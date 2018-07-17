const User = require('../models/user.model');

const UsersControllers = {
    async find(ctx) {
        ctx.body = await User.find();
    },

    async findById(ctx) {
        try {
            const user = await User.findById(ctx.params.id);
            if (!user) {
                ctx.throw(404);
            }
            ctx.body = user;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    },

    /**
     * Add a user
     * @param {ctx} Koa Context
     */
    async add(ctx) {
        try {
            const user = await new User(ctx.request.body).save();
            ctx.body = user;
        } catch (err) {
            ctx.throw(422);
        }
    },
    
    /**
     * Update a user
     * @param {ctx} Koa Context
     */
    async update(ctx) {
        try {
            const user = await User.findByIdAndUpdate(
                ctx.params.id,
                ctx.request.body
            );
            if (!user) {
                ctx.throw(404);
            }
            ctx.body = user;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    },

    /**
     * Delete a user
     * @param {ctx} Koa Context
     */
    async delete(ctx) {
        try {
            const user = await User.findByIdAndRemove(ctx.params.id);
            if (!user) {
                ctx.throw(404);
            }
            ctx.body = user;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }

}

module.exports = UsersControllers;