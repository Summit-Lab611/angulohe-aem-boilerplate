// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
await loadScript('https://assets.adobedtm.com/78af697641c3/8c86e24f92f7/launch-159c1d47c2de.min.js', { async: true });
