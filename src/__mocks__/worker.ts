import { setupWorker } from 'msw';
import {
  adminHandlers,
  authHandlers,
  memberHandlers,
  searchContentsHandlers,
  mainContentsHandlers,
  bookmarkHandlers,
  likeHandlers,
  notRecommendHandlers,
  viewHandlers,
  specificCreatorHandler,
  creatorListHandler,
} from './handlers';

export const worker = setupWorker(
  ...adminHandlers,
  ...authHandlers,
  ...memberHandlers,
  ...searchContentsHandlers,
  ...mainContentsHandlers,
  ...bookmarkHandlers,
  ...likeHandlers,
  ...notRecommendHandlers,
  ...viewHandlers,
  ...specificCreatorHandler,
  ...creatorListHandler
);
