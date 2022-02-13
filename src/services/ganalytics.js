export const ganalytics = {
    // Existing category Unique name
    // This example shows how to block Google Analytics
    category: 'analytics',
    // Type of blocking to apply here.
    // This depends on the type of script we are trying to block
    // Can be: dynamic-script, script-tag, wrapped, localcookie
    type: 'dynamic-script',
    // Only needed if "type: dynamic-script"
    // The filter will look for this keyword in inserted scipt tags
    // and block if match found
    search: 'analytics',
    // List of known cookie names or Regular expressions matching
    // cookie names placed by this service.
    // These willbe removed from current domain and .domain.
    cookies: [
        {
            // Known cookie name.
            name: '_gid',
            // Expected cookie domain.
            domain: `.${window.location.hostname}`
        },
        {
            // Regex matching cookie name.
            name: /^_ga/,
            domain: `.${window.location.hostname}`
        },
        {
            name: 'ads/ga-audiences',
            domain: `.${window.location.hostname}`
        },
    ],
    language: {
        locale: {
            cs: {
                name: 'Google Analytics – analytika návštěvnosti'
            },
            en: {
                name: 'Google Analytics – traffic analytics'
            },
        }
    }
};
