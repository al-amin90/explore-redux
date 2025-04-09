const logger = (state) => (next) => (action) => {
    console.log(action.type);
    console.info('prv state',state.getState());
    const result =  next(action)
    console.info('next state',state.getState());
    return result
}

export default logger