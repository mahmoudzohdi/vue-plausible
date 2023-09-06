import Plausible from 'plausible-tracker';
const VuePlausible = (Vue, options) => {
    const plausible = Plausible(options);
    if (options?.enableAutoPageviews === true) {
        plausible.enableAutoPageviews();
    }
    if (options?.enableAutoOutboundTracking === true) {
        plausible.enableAutoOutboundTracking();
    }
    Vue.$plausible = plausible;
    Vue.prototype.$plausible = plausible;
};
export default VuePlausible;
