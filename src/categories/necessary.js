export const necessary = {
    // The cookies here are necessary and category cant be turned off.
    // Wanted config value  will be ignored.
    needed: true,
    // The cookies in this category will be let trough.
    // This probably should be false if not necessary category
    wanted: true,
    // If the checkbox is on or off at first run.
    checked: true,
    // Language settings for categories
    language: {
        locale: {
            en: {
                name: 'Necessary cookies',
                description: 'These are technical files that are required for the proper functioning of our website and all its features. They are used, for example, to store products in your shopping cart, display products on request, control filters, personal settings and to configure your consent with the use of cookies. Your consent is not required for these cookies and cannot be removed.'
            },
            cs: {
                name: 'Nezbytné cookies',
                description: 'Jedná se o technické soubory, které jsou nezbytné ke správnému chování našich webových stránek a všech jejich funkcí. Používají se mimo jiné k ukládání produktů v nákupním košíku, zobrazování produktů na přání, ovládání filtrů, osobního nastavení a také nastavení souhlasu s uživáním cookies. Pro tyto cookies není zapotřebí Váš souhlas a není možné jej ani odebrat.',
            }
        }
    }
};
