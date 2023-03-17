import * as selectors from './selectors';
import * as actions from './actions';
import * as assertions from './assertions';

export const landingPage = {
    ...selectors,
    ...actions,
    ...assertions,
}