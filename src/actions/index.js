export const SAVE_SEARCH_QUERY = 'SAVE_SEARCH_QUERY';

export function actionSaveSearchQuery(params) {
  return {
    type: SAVE_SEARCH_QUERY,
    params: params
  };
}
