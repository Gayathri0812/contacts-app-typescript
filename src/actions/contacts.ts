/* axios */
import axios from "axios";

/* types */
import * as types from "../constants/actionTypes";
import { URL } from "../constants/URL";

const getContactInformationList = () => {
    const _getRequest = axios.get(URL);
    return (dispatch: any) => {
        return _getRequest
            .then(({ data }) => {
                return dispatch({ type: types.UPDATE_CONTACT_LIST, payload: data })
            })
            .catch(error => {
                throw new Error(error);
            });
    };
};
export { getContactInformationList };
