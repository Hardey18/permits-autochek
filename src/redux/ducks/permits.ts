export const GET_PERMITS = "GET_PERMITS";
const SET_PERMIT = "SET_PERMIT";

export const getUser = () => ({
  type: GET_PERMITS
});

export const setPermit = (permits: any) => ({
  type: SET_PERMIT,
  permits
});

const initialState = {
  permits: undefined
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PERMIT:
      const { permits } = action;
      return { ...state, permits };
    default:
      return state;
  }
};
