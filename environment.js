if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const DEVMODE = process.env.DEVMODE === 'true'