import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
import CookieConsent from './lib/CookieConsent';
import * as categories from './categories';
import * as services from './services';
import * as i18n from './i18n';

const cookieConsent = new CookieConsent();

window.CookieConsent = window.CookieConsent || {};
window.CookieConsent.init = cookieConsent.init;
window.CookieConsent.categories = categories;
window.CookieConsent.services = services;
window.CookieConsent.i18n = i18n;

