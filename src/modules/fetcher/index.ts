import { usePrevious } from '../../hooks/usePrevious';
import isEqual from 'lodash/isEqual';
import { FunctionComponent, useCallback, useEffect, useReducer } from 'react';
import { ApiResponse, ApiError } from '../../constants/types';

type TokenSelector = () => string;
let selectToken: TokenSelector = () => '';

export const setupFetchers = (fn: TokenSelector) => {
  selectToken = fn;
};

export interface Config<Entity> {
  fetch: (token: string) => (params?: any) => Promise<ApiResponse<Entity>>;
}

export const createFetcher = <Entity>({
  fetch: setupFetch
}: Config<Entity>) => {
  type Params = Parameters<ReturnType<typeof setupFetch>>[0];

  interface ActionRequest {
    type: 'request';
  }

  interface ActionSuccess {
    type: 'success';
    payload: Entity;
  }

  interface ActionFailure {
    type: 'failure';
    error: ApiError;
  }

  type Action = ActionRequest | ActionSuccess | ActionFailure;

  interface State {
    data: Entity | null;
    isFetching: boolean;
    error: ApiError | null;
  }

  interface RenderProps {
    state: State;
    fetch: () => void;
  }

  interface FetcherProps {
    children: (props: RenderProps) => any;
    params?: Params;
    filter?: (entity: Entity) => boolean;
  }

  const initialState: State = {
    isFetching: false,
    data: null,
    error: null
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'request':
        return {
          ...state,
          isFetching: true,
          error: null
        };

      case 'success':
        return {
          ...state,
          isFetching: false,
          data: action.payload
        };

      case 'failure':
        return {
          ...state,
          isFetching: false,
          error: action.error
        };
      default:
        return state;
    }
  };

  const Fetcher: FunctionComponent<FetcherProps> = ({
    params,
    children: render
  }: FetcherProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const prevParams = usePrevious(params);

    const handleFetch = useCallback(async () => {
      try {
        dispatch({
          type: 'request'
        });

        // configure fetch with the latest auth token
        const token = selectToken();
        const fetch = setupFetch(token);

        const response = await fetch(params);
        if (response.success) {
          dispatch({
            type: 'success',
            payload: response.data
          });
        } else {
          dispatch({
            type: 'failure',
            error: response.error
          });
        }
      } catch (error) {
        dispatch({
          type: 'failure',
          error
        });
      }
    }, [params]);

    useEffect(() => {
      if (!params || !isEqual(prevParams, params)) {
        handleFetch();
      }
    }, [handleFetch, params, prevParams]);

    return render({
      state,
      fetch: handleFetch
    });
  };

  return Fetcher;
};
