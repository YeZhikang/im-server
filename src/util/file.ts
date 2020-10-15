import fs from 'fs';
import path from "path";

export const readFile = (pathname) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathname, (err, data) => {
            if(!err){
                resolve(JSON.parse(data.toString()))
            }else{
                reject(err)
            }
        })
    })
}

export const fileDataModify = (pathname, fn, initialData = null) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathname, (err, data) => {
            if (!err && !initialData) {
                initialData = JSON.parse(data.toString('utf8'))
            }
            const currentData = fn(initialData);
            fs.writeFile(
                path.resolve(pathname),
                JSON.stringify(currentData),
                (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve(true)
                    }
                }
            )
        })
    })
}