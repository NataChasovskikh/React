export const isAuthenticated = (state) => state.session.isAuthenticated;

export const detToken = state.session.token;

export const getUser = (state) => state.session.user;