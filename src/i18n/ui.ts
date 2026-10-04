import es from './es.json';
import en from './en.json';

export const languages= {es: "Español", en: "English"};
export type Locale = keyof typeof languages;

const ui = {es, en} as const;

export function useTranslations(locale: String | undefined) {
    const lang: Locale = locale ==='en'? 'en' : 'es';
    const dict = ui[lang];
    return {
        locale: lang,
        t: (key: keyof typeof dict) => dict[key],
        interpolate: (template: string, vars: Record<string, string>) =>
            template.replaceAll(/\{\{(\w+)\}\}/g, (_, k) => vars[k] ?? ''),
        };
    }