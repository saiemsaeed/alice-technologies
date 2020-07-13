const selectById = (id, prevStateList) => {
  const selectedItem = prevStateList.find(question => question.id === id)

  const newListState = prevStateList.map(question => ({
    ...question,
    selected: question.id === id,
  }))

  return {
    selectedItem: { ...selectedItem, selected: true },
    newListState,
  }
}

export default selectById
