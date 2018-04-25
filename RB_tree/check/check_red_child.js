module.exports = function(tree) {
    const root = tree.root
    return check_node(root)
}

function check_node(node) {
    if (node === null) return false
    if (node.color == 'red') return node_should_be_black(node.children.left) || node_should_be_black(node.children.right)
    else return check_node(node.children.left) || check_node(node.children.right)
}

function node_should_be_black(node) {
    if (node === null) return false
    if (node.color !== 'black') return 'err:red node color children should be black'
    else return check_node(node.children.left) || check_node(node.children.right)

}