require('dotenv').config();

const { MongoClient } = require('mongodb');

const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const host = process.env.MONGO_DB_HOST || 'database';

if (!username || !password || !host) {
    throw new Error('MongoDB environment variables are not defined');
}

const uri = `mongodb://${username}:${password}@${host}:27017`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let _db;

module.exports = {
    connectToMongoDB: async function (callback) {
        try {
            await client.connect();
            _db = client.db('employees');
            console.log('Successfully connected to MongoDB.');
            return callback(null);
        } catch (error) {
            return callback(error);
        }
    },

    getDb: function () {
        return _db;
    }
};
