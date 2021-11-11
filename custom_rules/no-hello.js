module.exports = {
  meta: {
    type: 'suggestion',
    messages: {
      tip: '禁止使用hello命名：\'{{ name }}\''
    }
  },
  create (context) {
    return {
      Identifier (node) {
        if (node.name.toLocaleLowerCase().indexOf('hello') > -1) {
          context.report({
            node,
            messageId: 'tip',
            data: {
              name: node.name,
            }
          })
        }
      }
    }
  }
}