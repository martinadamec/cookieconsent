export const analytics = {
    // The cookies here are necessary and category cant be turned off.
    // Wanted config value  will be ignored.
    needed: false,
    // The cookies in this category will be let trough.
    // This probably should be false if not necessary category
    wanted: false,
    // If the checkbox is on or off at first run.
    checked: false,
    // Language settings for categories
    language: {
        locale: {
            cs: {
                name: 'Analytické cookies',
                description: 'Tyto cookies nám umožňují měřit výkonnost našich webových stránek a našich online kampaní. S jejich pomocí zjišťujeme počet návštěv, zdroj návštěv a další parametry. Shromážděné údaje zjišťujeme v agregované podobě, která nám neumožňuje údaje dohledat ke konkrétnímu uživateli. Pokud tyto cookies deaktivujete, nebudeme moci analyzovat výkonnost našich webových stránek a optimalizovat je pro co nejsnažší užívání.',
            },
            en: {
                name: 'Analytical cookies',
                description: 'These cookies allow us to analyse the performance of our website and our online campaigns. We use them to see how many times you visit a site, the source of your visits and other parameters. We collect data in an aggregate form, which does not allow us to trace the data to a specific user. If you disable these cookies, we will not be able to analyse the performance of our website and optimise it for your easiest possible use.',
            },
            sk: {
                name: 'Analytické cookies',
                description: 'Tieto cookies nám umožňujú merať výkonnosť našich webových stránok a našich online kampaní. S ich pomocou zisťujeme počet návštev, zdroj návštev a ďaľšie parametre. Zhromaždené údaje zisťujeme v agregovanej podobe, ktorá, nám neumožňuje údaje dohľadať ku konkrétnemu používateľovi. Ak tieto cookies deaktivujete, nebudeme môcť analyzovať výkonnosť našich webových stránok a optimalizovať ich pre čo najľahšie používanie.',
            }
        }
    }
};
