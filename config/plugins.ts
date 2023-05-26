module.exports = (env) => ({
    'users-permissions': {
        enabled: true,
        config: {
        jwt: {
            expiresIn: '1d', // Default millisecond (60s)  1 minute
        },
    }
  },
})