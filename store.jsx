import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userData from "./components/data/userData";

let store;

const InitialState = {
  users: [...userData],
  outfits: [],
  currentOutfit: {},
  session: {},
};

export const actionTypes = {
  LOAD_DATA: "LOAD_DATA",
  LOAD_PREMADE: "LOAD_PREMADE",
  SAVE_OUTFIT: "SAVE_OUTFIT",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        session: action.payload,
      };

    default:
      return state;
  }
};

// ACTIONS

export const login = (username, password) => {
  return doLogin(username, password);
};

const doLogin = (username, password) => {
  const user = userData.find(
    (user) => user.username == username && user.password == password
  );
  if (user) {
    return {
      type: actionTypes.LOGIN,
      payload: { response: "success", user: { ...user } },
    };
  }
  return {
    type: actionTypes.LOGIN,
    payload: { response: "error", error: "user not found" },
  };
};

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["users"], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

function makeStore(initialState = InitialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
