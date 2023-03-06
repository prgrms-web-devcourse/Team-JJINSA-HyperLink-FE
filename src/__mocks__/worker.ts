import { setupWorker } from 'msw';
import {
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
