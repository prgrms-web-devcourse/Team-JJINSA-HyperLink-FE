import { setupWorker } from 'msw';
import { contentsHandlers } from './handlers';

export const worker = setupWorker(...contentsHandlers);
