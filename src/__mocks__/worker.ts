import { setupWorker } from 'msw';
import { cardlistHandlers } from './handlers';

export const worker = setupWorker(...cardlistHandlers);
