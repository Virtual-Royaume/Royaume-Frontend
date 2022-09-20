import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface ISettings {
    isFilterOpened: boolean;
    closedSidebarMenus: string[];
}

const defaultValue: ISettings = {
    isFilterOpened: true,
    closedSidebarMenus: []
};

const initialValue = browser ? window.localStorage.getItem('settings') ? JSON.parse(window.localStorage.getItem('settings') ?? '{}') : defaultValue : defaultValue;

const settings = writable<ISettings>(initialValue);

settings.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('settings', JSON.stringify(value));
    }
});

export default settings;