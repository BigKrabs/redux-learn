import { CREATE_POST, FETCH_POSTS } from "./types"

const initialState = {
    posts: [],
    fethedPosts: []
}
// Pure Functions 
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] } // создаем новый масив основываясь на старом 
        case FETCH_POSTS: 
            return { ...state, fethedPosts: action.payload} 
        default: return state
    }

}