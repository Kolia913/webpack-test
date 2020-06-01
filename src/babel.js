async function start() {
   return await Promise.resolve('async is working')
}

start().then(console.log)

const unused = 'unused variable:)'

class Util {
    static id = Date.now()
}

console.log('Util id', Util.id)

//lazy import
import ('lodash').then( _ => {
    console.log('Lodash', _.random(0, 42, true))
})