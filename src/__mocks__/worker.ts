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
  viewHandlers,
  historyHandler,
} from './handlers';

export const worker = setupWorker(
  ...adminHandlers,
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
