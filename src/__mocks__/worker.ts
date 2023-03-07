import { setupWorker } from 'msw';
import {
  authHandlers,
  bookmarkHandlers,
  creatorListHandler,
  likeHandlers,
  mainContentsHandlers,
  memberHandlers,
  notRecommendHandlers,
  searchContentsHandlers,
  specificCreatorHandler,
  viewHandlers,
  historyHandler,
} from './handlers';

export const worker = setupWorker(
  ...authHandlers,
  ...bookmarkHandlers,
  ...creatorListHandler,
  ...likeHandlers,
  ...mainContentsHandlers,
  ...memberHandlers,
  ...notRecommendHandlers,
  ...searchContentsHandlers,
  ...specificCreatorHandler,
  ...viewHandlers,
  ...historyHandler
);
