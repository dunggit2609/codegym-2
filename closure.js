const pow = (m) => {

    return function multi(n){
        let result = 1
        for (let index = 0; index < n; index++) {
            result *= m
            
        }
        return result
    }
}

const pow4=pow(4)

const result = pow4(4)

console.log("result:", result)


