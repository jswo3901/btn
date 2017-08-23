let nextTodoId = 0
const add = (text) => ({
  type: 'ADD',
  id: nextTodoId++,
  text
})

const set = (filter) => ({
  type: 'SET',
  filter
})

const toggle = (id) => ({
  type: 'TOGGLE',
  id
})

export { add,set,toggle}
