export const IS_BEFORE = 0;
export const IS_AFTER = 1;

export const countTrueObj = (obj) => {
    let count = 0;
    for(let key of Object.keys(obj)){
        if(obj[key]){
            count ++;
        }
    }

    return count;
}

export const dayDate = (type = IS_BEFORE, num) => {
    const date = new Date();

    if(type === IS_BEFORE){
        date.setTime(date.getTime() - 24*60*60*1000 * num)
    }else if(type === IS_AFTER){
        date.setTime(date.getTime() - 24*60*60*1000 * num)
    }

    return [date.getFullYear(), date.getMonth()+1, date.getDate()]
}