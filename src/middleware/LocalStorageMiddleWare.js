const LocalStorageMiddleWare = state => {

    return next => action => {
        const returnValue = next(action);
        localStorage.setItem('todos', JSON.stringify(state.getState().todos))
        return returnValue;
    }
}
export default LocalStorageMiddleWare;