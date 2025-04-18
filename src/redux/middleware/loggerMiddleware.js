const loggerMiddleware = (store) => (next) => (action) => {
  console.log('BEFORE', store.getState());
  console.log('ACTION', action);
  next(action);
  console.log('AFTER', store.getState());
};

export default loggerMiddleware;
