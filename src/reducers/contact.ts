import * as types from "../constants/actionTypes";
export interface ContactDetails {
  id: number,
  fName: string;
  lName: string;
  emailId: string;
  phNumber: string;
}

export const defaultState = {
  contactList: []
};
interface ACTION {
  type: string,
  payload: ContactDetails | ContactDetails[]
}
export const contactReducer = (state = defaultState, action: ACTION) => {
  switch (action.type) {
    case types.UPDATE_CONTACT_LIST: return Object.assign({}, state, {
      contactList: action.payload
    })
    default:
      return state;
  }
};
