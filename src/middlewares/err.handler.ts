export module errHandler {
    export const asyncHandler = (fn) => async (request, response, next) => {
        fn(request, response, next).catch(next);
    };
  }