import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

/**
 * Map reducers state to component props
 */
export function mapStateToProps(state: any) {
  return {
    ...state
  };
}

/**
 * Map actions to component props
 */
export function mapDispatchToProps(dispatch: any) {
  return bindActionCreators<any, any>(Actions, dispatch);
}
