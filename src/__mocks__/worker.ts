import { setupWorker } from 'msw';
import { authHandlers, memberHandlers } from './handlers';

export const worker = setupWorker(...authHandlers, ...memberHandlers);
