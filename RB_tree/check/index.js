const
    check_all_color = require('./check_all_color'),
    check_black_count = require('./check_black_count'),
    check_red_children = require('./check_red_child'),
    check_root_color = require('./check_root_color')


module.exports = function(tree) {
    const checks = [
        check_all_color,
        check_black_count,
        check_red_children,
        check_root_color
    ]

    checks
        .map(i => i(tree))
        .filter(i=>i)
        .forEach(i => { console.log(i) })

    console.log('All check done!')
}