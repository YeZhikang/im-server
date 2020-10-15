import mysql, {PoolConnection} from 'mysql'
import {connectHandler} from "./index";

type IShowBack = (queryWord: string) => Promise<any>;


const showBack: IShowBack = async (queryWord) => {
    const connection = await connectHandler();
    return new Promise((resolve, reject) => {
        connection.query(queryWord,  (err, res) => {
            if(err){
                reject(err)
            }else{
                resolve(res)
                connection.release();
            }
        })
    })
}

export default class UserDao {
    async findOne(user, password) {
        const res = await showBack(`SELECT * FROM account WHERE user = "${user}" AND password = "${password}"`);
        if (res.length) {
            return res
        }
        return false
    }


    async insertOne(user, password, location, email, selfIntroduction) {
        return showBack(`INSERT INTO account ( user, password, email, location, self_introduction ) 
                VALUES ("${user}", "${password}", "${email}", "${location}", "${selfIntroduction}")`)
    }
}