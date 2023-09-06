import path from 'path';
import packageJSON from '../package.json';
// default options, fallback to plausible-tracker defaults
const defaultOptions = {
    domain: undefined,
    hashMode: undefined,
    trackLocalhost: undefined,
    apiHost: undefined,
    enableAutoPageviews: true,
    enableAutoOutboundTracking: false
};
const PlausibleModule = function (moduleOptions) {
    if (!this)
        return;
    const options = {
        ...defaultOptions,
        ...this.options.plausible,
        ...moduleOptions
    };
    this.addPlugin({
        src: path.resolve(__dirname, '../esm/nuxt-plugin.js'),
        mode: 'client',
        ssr: false,
        fileName: 'vue-plausible.client.js',
        options
    });
};
export default PlausibleModule;
export const meta = packageJSON;