import { setupWorker } from 'msw';
import { cardlist } from './handlers';

export const worker = setupWorker(...cardlist);
