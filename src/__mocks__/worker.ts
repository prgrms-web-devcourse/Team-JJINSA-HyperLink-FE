import { setupWorker } from 'msw';
import {
  authHandlers,
  memberHandlers,
  contentsHandlers,
  cardlistHandlers,
  bookmarkHandlers,
  likeHandlers,
  notRecommendHandlers,
  viewHandlers,
} from './handlers';

export const worker = setupWorker(
  ...authHandlers,
  ...memberHandlers,
  ...contentsHandlers,
  ...cardlistHandlers,
  ...bookmarkHandlers,
  ...likeHandlers,
  ...notRecommendHandlers,
  ...viewHandlers
);
