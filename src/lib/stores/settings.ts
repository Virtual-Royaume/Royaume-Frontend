import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = {
    isFilterOpened: true
};

const initialValue = browser ? window.localStorage.getItem('settings') ? JSON.parse(window.localStorage.getItem('settings') ?? '{}') : defaultValue : defaultValue;

const settings = writable(initialValue);

settings.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('settings', JSON.stringify(value));
    }
});

export default settings;