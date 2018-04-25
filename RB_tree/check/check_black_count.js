module.exports = function(tree) {
    const root = tree.root
    const res = get_black_count(root)

    return typeof res === 'symbol' ? 'err: node black count should be equal' : false
}


function get_black_count(node) {
    if (node === null) return 1
    else if (node.color == 'black') {
        const
            l1 = get_black_count(node.children.left),
            l2 = get_black_count(node.children.right)

        if (l1 === l2) return l1 + 1
        else return Symbol('err')
    } else {
        const
            l1 = get_black_count(node.children.left),
            l2 = get_black_count(node.children.right)

        if (l1 === l2) return l1
        else return Symbol('err')
    }

}