import { setupWorker } from 'msw';
import { authHandlers, memberHandlers, contentsHandlers } from './handlers';

export const worker = setupWorker(
  ...authHandlers,
  ...memberHandlers,
  ...contentsHandlers
);
