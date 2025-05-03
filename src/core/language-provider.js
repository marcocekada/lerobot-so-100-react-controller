import { language } from '../components/Language';

var serverLanguage = {}

async function setCurrentLanguage(languagePack) {
    serverLanguage = languagePack
    return true
}

function get(identifier, defaultString) {
    if (!identifier) return "";

    var exploded = identifier.split('.');

    var base = language;

    for (var i = 0; i < exploded.length; i++) {
        var key = exploded[i];
        base = base[key];

        if (base === null) {
            return "loading....";
        }
        else if (base === undefined) {
            return defaultString;
        }
    }

    return base;
}


export const LanguageProvider = {
    get: get,
    setCurrentLanguage: setCurrentLanguage
};