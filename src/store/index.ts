/* redux */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/* custom */
import state from "../reducers";

// store configuration by applying thunk middleware
export default function configureStore() {
    return createStore(state, applyMiddleware(thunk));
}
