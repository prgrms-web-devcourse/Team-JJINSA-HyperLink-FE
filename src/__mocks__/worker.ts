import { setupWorker } from 'msw';
import {
  authHandlers,
  memberHandlers,
  contentsHandlers,
  cardlistHandlers,
} from './handlers';

export const worker = setupWorker(
  ...authHandlers,
  ...memberHandlers,
  ...contentsHandlers,
  ...cardlistHandlers
);
