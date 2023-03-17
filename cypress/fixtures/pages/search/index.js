import * as selectors from './selectors';
import * as actions from './actions';
import * as assertions from './assertions';

export const searchPage = {
    ...selectors,
    ...actions,
    ...assertions,
}