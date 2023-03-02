import { action, Action } from 'easy-peasy';

export interface SiteSettings {
    name: string;
    logo: string;
    locale: string;
    recaptcha: {
        enabled: boolean;
        siteKey: string;
    };
    register: boolean;
}

export interface SettingsStore {
    data?: SiteSettings;
    setSettings: Action<SettingsStore, SiteSettings>;
}

const settings: SettingsStore = {
    data: undefined,

    setSettings: action((state, payload) => {
        state.data = payload;
    }),
};

export default settings;
