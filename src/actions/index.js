export const addItem = item => ({
  type: 'ADD_ITEM',
  item,
});
export const toggleItem = item => ({
  type: 'TOGGLE_ITEM',
  item,
});
export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  item,
});
