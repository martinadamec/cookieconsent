export const config = {
    category: 'necessary',
    type: 'dynamic-script',
    search: '',
    cookies: [
        {
            name: '_nss',
            domain: `${window.location.hostname}`
        },
        {
            name: 'nette-samesite',
            domain: `${window.location.hostname}`
        },
        {
            name: '_GRECAPTCHA',
            domain: 'www.google.com'
        },
        {
            name: '_grecaptcha',
            domain: `${window.location.hostname}`
        },
    ],
    language: {
        locale: {
            cs: {
                name: 'Konfigurační cookies'
            },
            en: {
                name: 'Configuration cookies'
            },
        }
    }
};
