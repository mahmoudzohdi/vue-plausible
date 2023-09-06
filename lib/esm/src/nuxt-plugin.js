import Plausible from 'plausible-tracker';
const PlausiblePlugin = (context, inject) => {
    const optionsDomain = '<%= options.domain %>';
    const optionsHashMode = '<%= options.hashMode %>';
    const optionsTrackLocalhost = '<%= options.trackLocalhost %>';
    const optionsApiHost = '<%= options.apiHost %>';
    const optionsEnableAutoPageviews = '<%= options.enableAutoPageviews %>';
    const optionsEnableAutoOutboundTracking = '<%= options.enableAutoOutboundTracking %>';
    const options = {
        domain: optionsDomain.length ? optionsDomain : null,
        hashMode: optionsHashMode === 'true',
        trackLocalhost: optionsTrackLocalhost === 'true',
        apiHost: optionsApiHost.length ? optionsApiHost : 'https://plausible.io',
        enableAutoPageviews: optionsEnableAutoPageviews === 'true',
        enableAutoOutboundTracking: optionsEnableAutoOutboundTracking === 'true',
        // Override plugin configuration with Nuxt Runtime config without re-building
        ...context.$config?.plausible
    };
    if (options.domain !== null) {
        const plausible = Plausible(options);
        if (options.enableAutoPageviews === true) {
            plausible.enableAutoPageviews();
        }
        if (options.enableAutoOutboundTracking === true) {
            plausible.enableAutoOutboundTracking();
        }
        inject('plausible', plausible);
    }
};
export default PlausiblePlugin;
