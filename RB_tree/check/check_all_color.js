module.exports = function(tree) {
    const root = tree.root
    return check_node(root)
}


function check_node(node) {
    if (node === null) return false
    else if (node.color !== 'red' && node.color !== 'black') return 'err: node color should be red or black'
    else return check_node(node.children.left) || check_node(node.children.right)
}