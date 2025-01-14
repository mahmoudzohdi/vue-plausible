import { Plugin } from '@nuxt/types'
import Plausible from 'plausible-tracker'
import { PlausibleModuleOptions } from './module-options'

const PlausiblePlugin: Plugin = (context, inject) => {
  const optionsDomain = '<%= options.domain %>'
  const optionsHashMode = '<%= options.hashMode %>' as any
  const optionsTrackLocalhost = '<%= options.trackLocalhost %>' as any
  const optionsApiHost = '<%= options.apiHost %>'
  const optionsEnableAutoPageviews = '<%= options.enableAutoPageviews %>' as any
  const optionsEnableAutoOutboundTracking = '<%= options.enableAutoOutboundTracking %>' as any

  const options = {
    domain: optionsDomain.length ? optionsDomain : null,
    hashMode: optionsHashMode === 'true',
    trackLocalhost: optionsTrackLocalhost === 'true',
    apiHost: optionsApiHost.length ? optionsApiHost : 'https://plausible.io',
    enableAutoPageviews: optionsEnableAutoPageviews === 'true',
    enableAutoOutboundTracking: optionsEnableAutoOutboundTracking === 'true',
    // Override plugin configuration with Nuxt Runtime config without re-building
    ...context.$config?.plausible
  } as PlausibleModuleOptions

  if (options.domain !== null) {
    const plausible = Plausible(options)

    if (options.enableAutoPageviews === true) {
      plausible.enableAutoPageviews()
    }
    if (options.enableAutoOutboundTracking === true) {
      plausible.enableAutoOutboundTracking()
    }

    inject('plausible', plausible)
  }
}

export default PlausiblePlugin
