module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['themes/perso/layouts/**/*.html'],
            whitelist: [

            ]
        },
        autoprefixer: {},

    }
};