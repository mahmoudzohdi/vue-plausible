import { Module } from '@nuxt/types';
import { PlausibleModuleOptions } from './module-options';
declare const PlausibleModule: Module<PlausibleModuleOptions>;
export default PlausibleModule;
export declare const meta: {
    name: string;
    version: string;
    description: string;
    license: string;
    author: {
        name: string;
        url: string;
        email: string;
    };
    repository: {
        type: string;
        url: string;
    };
    main: string;
    module: string;
    types: string;
    files: string[];
    keywords: string[];
    scripts: {
        build: string;
        prepublishOnly: string;
        release: string;
        "release:pre": string;
    };
    dependencies: {
        "plausible-tracker": string;
    };
    devDependencies: {
        "@nuxt/types": string;
        nuxt: string;
        "standard-version": string;
        typescript: string;
        vue: string;
        vuex: string;
    };
};
//# sourceMappingURL=nuxt-module.d.ts.map