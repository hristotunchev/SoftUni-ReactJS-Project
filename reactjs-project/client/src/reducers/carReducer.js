export const carReducer = (state, action) => {
    switch (action.type) {
        case 'CAR_FETCH':
            return {...action.payload};
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail
                        }
                    }
                ]
            };
        default:
            return state;
    }
};