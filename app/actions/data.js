export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Data from '../DashBoardPage.json';
import Data from  '../db.json';
export const getData = () => {
    return (dispatch) => {

        fetch(db.json)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: DATA_AVAILABLE, data: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
