import mysql, {PoolConnection} from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 30,
    host: 'localhost',
    database: 'im',
    user: 'root',
    password: 'yezhikang123'
})

export const connectHandler = () => new Promise<PoolConnection>((resolve, reject) => {
    pool.getConnection((err, connection) => {

        if(err) {
            console.error(err)
            reject(err)
        } else {
            resolve(connection)
        }
    })
})