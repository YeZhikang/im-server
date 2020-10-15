import jwt from 'jsonwebtoken'

const PRIVATE_KEY = 'cest_la_vie'

export const signToken = (user, email) => {
    return jwt.sign({
        user: user,
        email: email
    }, PRIVATE_KEY, {expiresIn: '2h'})
}

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
            if(err){
                reject(err)
            }

            resolve(decoded)
        })
    })
}