import Utilities from "./Utilities";
import {cs, en} from "../i18n";

export default class Configuration {

    constructor(configObject) {

        window.CookieConsent.buffer = {
            appendChild: [],
            insertBefore: []
        }

        // Wrapper filter function
        window.CookieConsent.wrapper = function () {
        };

        // Settings injector for users
        window.CookieConsent.setConfiguration = this.setConfiguration.bind(this);

        window.CookieConsent.config = {
            active: true,
            cookieExists: false,
            cookieVersion: 1,
            modalMainTextMoreLink: null,
            modalMainTextMoreLinkExternal: false,
            barCustomId: null,
            barTimeout: 1000,
            language: {
                current: 'cs',
                locale: {en, cs}
            },
            categories: {},
            services: {}
        }

        this.setConfiguration(configObject);

    }

    setConfiguration(configObject) {
        // The user overrides the default config
        console.log(window.CookieConsent.config, configObject, {...window.CookieConsent.config, ...configObject});

        this.mergeDeep(window.CookieConsent.config, configObject)
        //loMerge(window.CookieConsent.config, configObject);
        // The cookie overrides the default and user config
        this.cookieToConfig();

        // We tell the world we did this
        Utilities.dispatchEvent(document, 'CCConfigSet');
    }

    cookieToConfig() {

        function removeReload() {
            Utilities.removeCookie();
            location.reload();
            return false;
        }

        document.cookie.split(';').filter((item) => {

            if (item.indexOf('cconsent') >= 0) {
                var cookieData = JSON.parse(item.split('=')[1]);

                // We check cookie version. If older we need to renew cookie.
                if (typeof cookieData.version === 'undefined') {
                    return removeReload();
                } else {
                    if (cookieData.version !== window.CookieConsent.config.cookieVersion) {
                        return removeReload();
                    }
                }

                // We check if cookie data categories also exist in user config
                for (let key in cookieData.categories) {

                    // The cookie contains category not present in user config so we invalidate cookie
                    if (typeof window.CookieConsent.config.categories[key] === 'undefined') {
                        return removeReload();
                    }
                }

                // We check if cookie data services also exist in user config
                cookieData.services.forEach(function (service) {

                    // The cookie contains service not present in user config so we invalidate cookie
                    if (typeof window.CookieConsent.config.services[service] === 'undefined') {
                        return removeReload();
                    }
                });

                // We we integrate cookie data into the global config object
                for (let key in cookieData.categories) {
                    window.CookieConsent.config.categories[key].checked = window.CookieConsent.config.categories[key].wanted = (cookieData.categories[key].wanted === true) ? true : false;
                }

                window.CookieConsent.config.cookieExists = true;
                return true;
            }
        });

        return false;
    }


    // Simple object check.
    isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }

    //Deep merge two objects.
    mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();

        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, {[key]: {}});
                    this.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, {[key]: source[key]});
                }
            }
        }

        return this.mergeDeep(target, ...sources);
    }
}
