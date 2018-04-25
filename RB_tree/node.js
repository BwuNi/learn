module.exports = function node(color = 'red',value = 0,left= null,right= null) {
    return {
        color,value,children:{right,left}
    }
}