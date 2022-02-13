import {el, mount, svg} from 'redom';
import Language from './Language';
import Utilities from "./Utilities";

export default class Interface {

    constructor() {
        this.elements = {};
    }

    buildCustomBar() {
        const bar = document.getElementById(window.CookieConsent.config.barCustomId);
        bar.classList.add('ccb--hidden');
        return bar;
    }
    
    getSvgCookies() {
        return svg(
            "svg",
            { viewBox: "0 0 1000 1000" },
            svg(
                "g", 
                svg(
                    "g", 
                    { transform: 'translate(0.000000,511.000000) scale(0.100000,-0.100000)' },
                    svg('path', {d: "M6623.5,4884.8c-301.1-832.5-301.1-856,165.3-1056.8c490-206.6,537.3-183,808.8,354.2c230.3,454.6,248,608.1,88.6,667.1c-41.3,17.8-289.3,53.2-555,70.9C6753.4,4955.7,6647.1,4949.7,6623.5,4884.8z M7184.3,4359.4c-94.4-177.1-324.7-147.6-253.8,35.5c17.7,47.2,94.4,82.6,171.2,82.6C7231.6,4477.5,7237.5,4459.7,7184.3,4359.4z" } ),
                    svg('path', {d: "M3937.3,4684.1C1723.5,4241.3,100,2263.6,100,20.2c0-2514.9,2007.2-4622.5,4522.2-4734.7c1068.6-53.1,1960,183,2816,749.8C8807.8-3067.4,9604.8-1591.5,9604.8,49.7c0,696.6-35.4,767.5-425.1,767.5c-265.7,0-318.8,23.6-525.4,230.3c-165.3,165.3-230.3,277.5-230.3,407.3c0,100.4-41.3,224.4-94.4,271.6c-112.2,112.1-82.7,112.1-336.5,5.9c-631.7-259.7-1369.6,129.9-1493.6,785.2c-35.5,183,0,383.7,129.8,785.2c41.3,129.8-129.8,289.2-312.9,289.2c-371.9,0-667.1,354.2-667.1,791.1c0,242-17.7,283.4-153.5,330.6C5289.3,4796.3,4397.8,4778.6,3937.3,4684.1z M5230.3,4034.7c76.7-307,389.6-690.7,661.2-797c171.2-70.8,183-94.4,147.6-301.1c-94.4-578.5,248-1251.6,791.1-1552.6c277.5-153.5,383.7-177.1,749.8-177.1c413.3,0,430.9-5.9,495.9-165.4c100.4-247.9,495.9-572.6,785.2-649.4c312.9-82.6,336.5-147.6,265.7-832.4c-177.1-1747.4-1393.3-3182.1-3111.2-3677.9c-501.8-141.7-619.9-153.5-1298.8-129.9c-614,23.6-832.4,59-1222.1,188.9C1723.5-3457,572.3-1845.3,572.3,20.2c0,749.8,141.7,1334.2,484.1,1995.4C1404.7,2694.6,2178.1,3468,2857,3816.2c619.9,318.8,1216.1,478.2,1824.2,478.2l484.1,5.9L5230.3,4034.7z" } ),
                    svg('path', {d: "M4155.8,3822.2c-248-147.6-354.2-625.8-183-867.8c183-265.7,454.6-112.2,401.4,230.3c-23.6,147.6-5.9,230.2,59,283.4c118.1,100.4,118.1,206.6,0,324.7C4327,3904.8,4297.5,3904.8,4155.8,3822.2z" } ),
                    svg('path', {d: "M3087.2,2659.2c-188.9-53.2-371.9-141.7-407.3-188.9c-35.4-59-17.7-236.2,53.1-531.3l112.2-442.8l295.2,11.8c165.3,0,401.4,41.3,531.3,88.6c236.1,82.7,236.1,82.7,224.3,371.9c-5.9,165.3-47.2,401.4-88.5,531.3C3713,2783.1,3606.7,2806.7,3087.2,2659.2z M3429.6,2139.6c47.2-118.1,47.2-112.2-124-165.3c-118.1-35.5-135.8-23.6-135.8,106.3c0,112.1,29.5,153.5,112.2,153.5C3341.1,2234.1,3411.9,2192.7,3429.6,2139.6z" } ),
                    svg('path', {d: "M4834.7,2163.2c-159.4-159.4-35.4-401.4,206.6-401.4c76.7,0,171.2-64.9,230.2-153.5c70.9-106.3,141.7-141.7,253.9-129.9c413.2,47.2,23.6,755.6-419.2,755.6C4994.1,2234.1,4876,2204.6,4834.7,2163.2z" } ),
                    svg('path', {d: "M1440.1,911.7c-165.3-153.5-242.1-354.2-206.6-572.7c11.8-112.2,53.1-141.7,188.9-141.7c147.6,0,183,29.5,224.4,183c29.5,106.3,106.3,206.6,194.8,247.9c183,82.7,242.1,218.4,147.6,336.5C1877,1100.6,1611.3,1071.1,1440.1,911.7z" } ),
                    svg('path', {d: "M3276.1,693.3c-124-70.8-141.7-348.3-35.4-454.6c112.2-112.2,389.6-88.6,460.5,41.3c82.6,165.3,76.7,224.3-59,360.1C3512.3,770,3423.7,781.8,3276.1,693.3z" } ),
                    svg('path', {d: "M6960,480.7c-29.5-59-100.4-289.2-159.4-507.7c-129.9-495.9-112.2-519.5,501.8-684.8C7662.5-812.2,7757-824,7816-759.1c100.4,100.4,330.6,909.2,289.2,1015.4c-29.5,82.7-749.7,324.7-968.2,324.7C7066.3,581.1,6989.5,533.8,6960,480.7z M7574-15.2c17.8-29.5,11.8-106.3-5.9-177.1c-29.5-88.6-70.8-106.3-165.3-76.7c-171.2,53.1-171.2,47.2-129.9,218.4c29.5,106.3,70.9,135.8,153.5,118.1C7491.3,49.7,7556.2,14.3,7574-15.2z" } ),
                    svg('path', {d: "M4923.3,398.1c-129.9-76.7-277.5-360.2-277.5-549c0-82.7,76.7-236.1,171.2-342.5c448.7-501.8,1233.8,53.2,926.8,649.4c-53.1,100.4-147.6,212.6-206.6,248C5389.6,480.7,5059,474.8,4923.3,398.1z M5342.4-109.7c-11.8-59-59-106.3-106.3-106.3s-94.4,47.2-106.3,106.3c-11.8,70.8,17.7,100.4,106.3,100.4S5354.2-38.8,5342.4-109.7z" } ),
                    svg('path', {d: "M2048.2-109.7c-336.5-124-495.9-537.2-318.8-832.4c312.9-531.3,1086.3-307,1086.3,318.8c0,94.4-70.9,224.3-200.7,354.2C2420.1-74.2,2260.7-32.9,2048.2-109.7z M2343.4-658.7c0-76.7-41.3-118.1-118.1-118.1c-112.2,0-159.4,118.1-76.7,194.8C2225.3-499.3,2343.4-546.5,2343.4-658.7z" } ),
                    svg('path', {d: "M6287-1083.8c-141.7-118.1-165.3-259.7-70.8-395.5c106.3-147.6,330.6-159.4,460.5-29.5c124,124,118.1,236.1-23.6,377.8C6517.2-995.2,6416.9-983.4,6287-1083.8z" } ),
                    svg('path', {d: "M4858.3-1603.3c-271.6-324.7-177.1-861.9,147.6-814.7c118,11.8,147.6,53.2,159.4,253.8c11.8,129.9,59,283.4,112.2,336.5c135.8,153.5,76.7,366-106.3,389.6C5059-1426.2,4976.4-1467.5,4858.3-1603.3z" } ),
                    svg('path', {d: "M2945.6-2028.3c-88.5-112.1-183-944.6-124-1062.6c35.4-64.9,159.4-112.1,389.6-135.8c188.9-17.7,395.5-47.2,466.4-59c224.3-47.2,312.9,88.6,383.7,584.5c76.7,572.7,53.1,602.2-507.7,678.9C3028.2-1945.7,3016.4-1945.7,2945.6-2028.3z M3624.5-2512.4c5.9-5.9,0-70.9-23.6-141.7c-17.7-88.6-76.7-129.9-171.2-129.9c-118.1,0-141.7,29.5-141.7,177.1c0,165.3,11.8,177.1,165.3,141.7C3541.8-2488.8,3618.6-2512.4,3624.5-2512.4z" } ),
                    svg('path', {d: "M6115.8-2364.8c-442.8-448.7,23.6-1186.7,602.1-950.5c236.1,100.4,348.3,277.5,348.3,549c0,312.9-253.8,572.7-560.8,572.7C6346-2193.6,6245.6-2240.8,6115.8-2364.8z M6641.2-2766.3c29.5-100.3-153.5-171.2-236.1-88.6c-35.4,35.5-41.3,88.6-17.7,129.9C6440.5-2642.3,6605.8-2671.8,6641.2-2766.3z" } ),
                    svg('path', {d: "M4716.6-3409.8c-177.1-124-171.2-348.3,17.7-472.3c135.8-88.6,159.4-88.6,295.2,0c188.9,123.9,194.8,348.3,17.7,472.3c-70.8,53.1-147.6,94.4-165.3,94.4S4787.5-3356.7,4716.6-3409.8z" } ),
                    svg('path', {d: "M8483.1,3893c-94.4-183-70.9-289.3,88.6-395.6c212.5-141.7,442.8-35.5,442.8,200.7c0,88.6-29.5,194.9-70.8,236.1C8831.5,4046.5,8554,4022.9,8483.1,3893z" } ),
                    svg('path', {d: "M7243.4,3001.5c-141.7-265.7,123.9-543.1,389.6-419.1c159.4,70.9,194.9,342.4,70.9,466.3C7585.8,3166.8,7314.2,3137.3,7243.4,3001.5z" } ),
                    svg('path', {d: "M8796,2848.1c-177.1-112.2-312.9-248-312.9-307c0-53.2,82.7-301.1,183-555c248-613.9,312.9-619.9,832.4-124c218.4,218.4,401.4,431,401.4,472.3c0,141.7-549,726.1-678.9,720.2C9156.2,3054.7,8961.3,2960.2,8796,2848.1z M9250.6,2440.7c59-76.7,53.2-112.1-35.4-212.5l-106.3-118.1l-47.2,129.9C8967.2,2482,9103,2617.8,9250.6,2440.7z" } ),
                ),
            ),
        );
    }

    buildBar() {
        let barText = Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barMainText');
        const acceptText = Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnAcceptAll');
        barText = barText.replace('%barBtnAcceptAll%', acceptText);
        const svgIcon = this.getSvgCookies();

        return el('div.cconsent-bar.ccb--hidden',
            el('div.cconsent-bar-container', 
                el(`div.ccb__wrapper`,
                    el('div.ccb__content',
                        el('div.ccb-icon', svgIcon),
                        el('div.ccb-text', barText),
                    ),
                    el('div.ccb__control',
                        el('button.consent-reject', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnReject')),
                        el('a.ccb__edit', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barLinkSetting')),
                        el('button.consent-give', acceptText)
                    )
                ),
            ),
        );
    }

    buildModal() {

        // Cookie names list middleware
        var listCookies = function (category) {
            var list = [];

            for (let service in window.CookieConsent.config.services) {
                (window.CookieConsent.config.services[service].category === category) && list.push(window.CookieConsent.config.services[service]);
            }

            if (list.length) {

                var listItems = [];

                for (let item in list) {
                    listItems.push(el('li', Language.getTranslation(list[item], window.CookieConsent.config.language.current, 'name')));
                }

                return [el('div.ccm__list', el('span.ccm__list__title', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalAffectedSolutions')), el('ul', listItems))];
            }
        }

        function modalTabGroups() {

            let contentItems = [];

            let i = 0;
            for (let key in window.CookieConsent.config.categories) {

                contentItems.push(el('dl.ccm__tabgroup' + '.' + key + ((window.CookieConsent.config.categories[key].checked) ? '.checked-5jhk' : ''), {'data-category': key},
                    el('dt.ccm__tab-head', Language.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'name'),
                        el('a.ccm__tab-head__icon-wedge',
                            el(document.createElementNS("http://www.w3.org/2000/svg", "svg"), {
                                    version: "1.2",
                                    preserveAspectRatio: "none",
                                    viewBox: "0 0 24 24",
                                    class: "icon-wedge-svg",
                                    "data-id": "e9b3c566e8c14cfea38af128759b91a3",
                                    style: "opacity: 1; mix-blend-mode: normal; fill: rgb(51, 51, 51); width: 32px; height: 32px;"
                                },
                                el(document.createElementNS("http://www.w3.org/2000/svg", "path"), {
                                    'xmlns:default': "http://www.w3.org/2000/svg",
                                    id: "angle-down",
                                    d: "M17.2,9.84c0-0.09-0.04-0.18-0.1-0.24l-0.52-0.52c-0.13-0.13-0.33-0.14-0.47-0.01c0,0-0.01,0.01-0.01,0.01  l-4.1,4.1l-4.09-4.1C7.78,8.94,7.57,8.94,7.44,9.06c0,0-0.01,0.01-0.01,0.01L6.91,9.6c-0.13,0.13-0.14,0.33-0.01,0.47  c0,0,0.01,0.01,0.01,0.01l4.85,4.85c0.13,0.13,0.33,0.14,0.47,0.01c0,0,0.01-0.01,0.01-0.01l4.85-4.85c0.06-0.06,0.1-0.15,0.1-0.24  l0,0H17.2z",
                                    style: "fill: rgb(51, 51, 51);"
                                })
                            )
                        ),
                    ),
                    el('dd.ccm__tab-content',
                        el('div.ccm__tab-content__left',
                            (!window.CookieConsent.config.categories[key].needed) && el('div.ccm__switch-component', el('div.status-off', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'off')),
                            el('div.ccm__switch-group',
                                el('label.ccm__switch',
                                    el('input.category-onoff', {
                                        type: 'checkbox',
                                        'data-category': key,
                                        'checked': window.CookieConsent.config.categories[key].checked
                                    }),
                                    el('span.ccm__switch__slider')
                                )
                            ),
                            el('div.status-on', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'on')))
                        ),
                        el('div.right',
                            el('h3', Language.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'name')),
                            el('p', Language.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'description')),
                            el('div.ccm__list',
                                listCookies(key)
                            )
                        )
                    )
                    )
                );

                i++;
            }

            return contentItems;
        }

        const h2 = el('h2', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainTitle'));
        h2.style.marginBottom = '10px';

        return el('div.cconsent-modal',
            el('div.ccm__content',
                el('div.ccm__content__heading',
                    h2,
                    el('p',
                        Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainText'),
                        (window.CookieConsent.config.modalMainTextMoreLink) ? el('a', {
                            href: window.CookieConsent.config.modalMainTextMoreLink,
                            target: '_blank',
                            rel: 'noopener noreferrer'
                        }, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainTitle')) : null
                    ),
                    el('div.ccm__cheading__close', '×')
                ),
                el('div.ccm__content__body',
                    el('div.ccm__tabs',
                        modalTabGroups()
                    )
                ),
                el('div.ccm__footer',
                    el('button.ccm__footer__consent-modal-submit.secondary', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnSave')),
                    el('button.consent-give', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnAcceptAll'))
                )
            )
        );
    }

    modalRedrawIcons() {
        var tabGroups = this.elements['modal'].querySelectorAll('.ccm__tabgroup');

        for (let tabGroup of tabGroups) {
            if (window.CookieConsent.config.categories[tabGroup.dataset.category].checked) {
                if (!tabGroup.classList.contains('checked-5jhk')) {
                    tabGroup.classList.add('checked-5jhk');
                    tabGroup.querySelector('input.category-onoff').checked = true;
                }
            } else {
                if (tabGroup.classList.contains('checked-5jhk')) tabGroup.classList.remove('checked-5jhk');
                tabGroup.querySelector('input.category-onoff').checked = false;
            }
        }
    }

    render(name, elem, callback) {
        if (typeof callback === 'undefined') callback = function () {
        };
        if (typeof this.elements[name] !== 'undefined') {
            this.elements[name].parentNode.replaceChild(elem, this.elements[name]);
            this.elements[name] = elem;
            callback(elem);
            return elem;
        } else {
            var insertedElem = mount(document.body, elem);
            if (insertedElem) {
                this.elements[name] = insertedElem;
            }
            callback(insertedElem);
            return insertedElem;
        }
    }

    buildInterface(callback) {

        if (typeof callback === 'undefined') callback = function () {
        };
        var that = this;

        Utilities.ready(function () {
            that.render('bar', window.CookieConsent.config.barCustomId ? that.buildCustomBar() : that.buildBar(), (bar) => {

                // Show the bar after a while
                if (!window.CookieConsent.config.cookieExists) {
                    setTimeout(() => {
                        bar.classList.remove('ccb--hidden');
                    }, window.CookieConsent.config.barTimeout);
                }
            });

            that.render('modal', that.buildModal());

            callback();
        });
    }

    addEventListeners(elements) {

        // If you click Accept all cookies
        const buttonConsentGive = document.querySelectorAll('.consent-give');
        const buttonConsentReject = document.querySelectorAll('.consent-reject');

        for (let button of buttonConsentGive) {
            button.addEventListener('click', () => {

                // We set config to full consent
                for (let key in window.CookieConsent.config.categories) {
                    window.CookieConsent.config.categories[key].wanted =
                        window.CookieConsent.config.categories[key].checked = true;
                }

                this.writeBufferToDOM();

                this.buildCookie((cookie) => {
                    this.setCookie(cookie);
                });

                this.elements['bar'].classList.add('ccb--hidden');
                this.elements['modal'].classList.remove('ccm--visible');

                this.modalRedrawIcons();

            });
        }

        for (let button of buttonConsentReject) {
            button.addEventListener('click', () => {
                this.writeBufferToDOM();
                this.buildCookie((cookie) => {
                    this.setCookie(cookie);
                });

                this.elements['bar'].classList.add('ccb--hidden');
                this.elements['modal'].classList.remove('ccm--visible');

                this.modalRedrawIcons();
            });
        }


        // If you click Cookie settings and open modal
        Array.prototype.forEach.call(document.getElementsByClassName('ccb__edit'), (edit) => {
            edit.addEventListener('click', (e) => {
                this.elements['modal'].classList.add('ccm--visible');
                e.preventDefault();
                return false;
            });
        });

        // If you click trough the tabs on Cookie settings
        // If you click on/off switch
        this.elements['modal'].querySelector('.ccm__tabs').addEventListener('click', (event) => {

            // If you click trough the tabs on Cookie settings
            if (event.target.classList.contains('ccm__tab-head') || event.target.classList.contains('ccm__tab-head__icon-wedge')) {

                function getDlParent(eventTarget) {
                    var parent = eventTarget.parentNode;
                    if (parent.nodeName !== 'DL') {
                        return getDlParent(parent);
                    } else {
                        return parent;
                    }
                }

                var parentDl = getDlParent(event.target);

                if (parentDl.classList.contains('ccm__tabgroup--open')) {
                    parentDl.classList.remove('ccm__tabgroup--open');
                } else {
                    parentDl.classList.add('ccm__tabgroup--open');
                }
            }

            // If you click on/off switch
            if (event.target.classList.contains('category-onoff')) {
                window.CookieConsent.config.categories[event.target.dataset.category].wanted =
                    window.CookieConsent.config.categories[event.target.dataset.category].checked = (event.target.checked === true) ? true : false;

                var dt = document.querySelector('.ccm__tabgroup.' + event.target.dataset.category);
                if (event.target.checked === false && dt.classList.contains('checked-5jhk')) {
                    dt.classList.remove('checked-5jhk');
                } else {
                    dt.classList.add('checked-5jhk');
                }
            }
        });


        // If you click close on open modal
        this.elements['modal'].querySelector('.ccm__cheading__close').addEventListener('click', (event) => {
            this.elements['modal'].classList.remove('ccm--visible');
        });

        // If you click submit on cookie settings
        document.querySelector('.ccm__footer__consent-modal-submit').addEventListener('click', () => {

            let switchElements = this.elements['modal'].querySelectorAll('.ccm__switch input');

            Array.prototype.forEach.call(switchElements, (switchElement) => {
                window.CookieConsent.config.categories[switchElement.dataset.category].wanted = switchElement.checked;
            });

            this.buildCookie((cookie) => {
                this.setCookie(cookie, () => {
                    this.elements['modal'].classList.remove('ccm--visible');
                    this.elements['bar'].classList.add('ccb--hidden');
                });
            });

            this.writeBufferToDOM();

        });
    }

    writeBufferToDOM() {

        for (let action of window.CookieConsent.buffer.appendChild) {
            if (window.CookieConsent.config.categories[action.category].wanted === true) {
                Node.prototype.appendChild.apply(action.this, action.arguments);
            }
        }

        for (let action of window.CookieConsent.buffer.insertBefore) {
            if (window.CookieConsent.config.categories[action.category].wanted === true) {
                action.arguments[1] = (action.arguments[0].parentNode === null) ? action.this.lastChild : action.arguments[1];
                Node.prototype.insertBefore.apply(action.this, action.arguments);
            }
        }
    }

    buildCookie(callback) {
        let cookie = {
            version: window.CookieConsent.config.cookieVersion,
            categories: {},
            services: []
        };

        for (let key in window.CookieConsent.config.categories) {
            cookie.categories[key] = {
                wanted: window.CookieConsent.config.categories[key].wanted,
            };
        }

        cookie.services = Utilities.listGlobalServices();

        if (callback) callback(cookie);
        return cookie;
    }

    setCookie(cookie, callback) {
        document.cookie = `cconsent=${JSON.stringify(cookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;`;
        if (callback) callback();
    }
}
