export const isEqualDate = (a, b) => {
    if(a.length !== b.length || a.length !== 3){
        return false
    }

    for(let i = 0; i < a.length; i++){
        console.log(parseInt(a[i]), parseInt(b[i]))
        if(parseInt(a[i]) !== parseInt(b[i])){
            return false
        }
    }

    return true
}

export const getYearMonthDay = (date) => {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
}