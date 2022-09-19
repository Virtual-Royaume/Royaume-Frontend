import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface ISettings {
    isFilterOpened: boolean;
    isHamburgerOpened: boolean;
}

const defaultValue: ISettings = {
    isFilterOpened: true,
    isHamburgerOpened: true
};

const initialValue = browser ? window.localStorage.getItem('settings') ? JSON.parse(window.localStorage.getItem('settings') ?? '{}') : defaultValue : defaultValue;

const settings = writable<ISettings>(initialValue);

settings.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('settings', JSON.stringify(value));
    }
});

export default settings;