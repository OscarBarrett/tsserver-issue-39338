import { setExtras } from 'isomorphic-sentry'; // tsserver crashes because of this import for some reason

setExtras({ foo: 'bar '});