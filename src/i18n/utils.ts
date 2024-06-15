import {ui, defaultLanguage} from './ui';

export const showDefaultLang = false

export const getLangFromUrl = (url : URL) => {
    const [, lang] = url.pathname.split('/')
    if (lang in ui) {
        return lang as keyof typeof ui
    }
    return defaultLanguage
}

export const useTranslations = (lang: keyof typeof ui) => {
    return function t(key: keyof typeof ui[typeof defaultLanguage]) {
        return ui[lang][key] || ui[defaultLanguage][key]
    }
}

export const useTranslatePath = (lang: keyof typeof ui) => {
    return function t(path: string , l: string = lang) {
        return !showDefaultLang && l === defaultLanguage ? path : `/${l}${path}`
    }
}