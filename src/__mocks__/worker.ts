import { setupWorker } from 'msw';
import {
  adminHandlers,
  authHandlers,
  bookmarkHandlers,
  creatorListHandler,
  likeHandlers,
  mainContentsHandlers,
  memberHandlers,
  notRecommendHandlers,
  searchContentsHandlers,
  specificCreatorHandler,
  subscriptionContentsHandlers,
  viewHandlers,
  companiesHandler,
  creatorInfoHandler,
  attentionCategoryHandler,
  historyHandler,
  recommendedCreatorsHandler,
} from './handlers';

export const worker = setupWorker(
  ...adminHandlers,
  ...authHandlers,
  ...recommendedCreatorsHandler,
  ...bookmarkHandlers,
  ...creatorListHandler,
  ...likeHandlers,
  ...mainContentsHandlers,
  ...memberHandlers,
  ...notRecommendHandlers,
  ...searchContentsHandlers,
  ...specificCreatorHandler,
  ...viewHandlers,
  ...companiesHandler
  ...subscriptionContentsHandlers,
  ...viewHandlers,
  ...creatorInfoHandler,
  ...attentionCategoryHandler,
  ...historyHandler
);
