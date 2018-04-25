const
    test = require('./index.js'),
    node = require('../node.js')

console.log('test1 should be succeed :')
test({
    root: node('black', 0,
        node('black', 0,
            node('red', 0, null, null),
            node('red', 0, null, null)),
        node('red', 0,
            node('black', 0,
                node('red', 0, null, null),
                node('red', 0, null, null)),
            node('black', 0, null, null)))
})

console.log('test2 should be failed at "root_color" :')
test({
    root: node('red', 0,
        node('black', 0,
            node('red', 0, null, null),
            node('red', 0, null, null)),
        node('black', 0, null, null))
})

console.log('test2 should be failed at "all_color" :')
test({
    root: node('black', 0,
        node('black', 0,
            node('red', 0, null, null),
            node('red', 0, null, null)),
        node('red', 0,
            node('black', 0,
                node('yellow', 0, null, null),
                node('red', 0, null, null)),
            node('black', 0, null, null)))
})

console.log('test3 should be failed at "black_count" :')
test({
    root: node('black', 0,
        node('black', 0,
            node('red', 0,
                node('black', 0, node('red', 0, node('black', 0, null, null), null), null),
                null),
            node('red', 0, null, null)),
        node('red', 0,
            node('black', 0,
                node('red', 0, null, null),
                node('red', 0, null, null)),
            node('black', 0, null, null)))
})

console.log('test3 should be failed at "red_child" :')
test({
    root: node('black', 0,
        node('black', 0,
            node('red', 0, null, null),
            node('red', 0, null, null)),
        node('red', 0,
            node('black', 0,
                node('red', 0, node('red', 0, null, null), null),
                node('red', 0, null, null)),
            node('black', 0, null, null)))
})