import {config} from './config';

export const configNette = {
    ...config,
    cookies: [
        ...config.cookies,
        {
            name: 'nette-samesite',
            domain: `${window.location.hostname}`
        },
    ],
};
