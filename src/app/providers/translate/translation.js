"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import translations
var lang_en_1 = require("./lang-en");
var lang_gr_1 = require("./lang-gr");
// translation token
exports.TRANSLATIONS = new core_1.OpaqueToken('translations');
// all translations
exports.dictionary = (_a = {},
    _a[lang_en_1.LANG_EN_NAME] = lang_en_1.LANG_EN_TRANS,
    _a[lang_gr_1.LANG_GR_NAME] = lang_gr_1.LANG_GR_TRANS,
    _a);
// providers
exports.TRANSLATION_PROVIDERS = [
    { provide: exports.TRANSLATIONS, useValue: exports.dictionary },
];
var _a;
//# sourceMappingURL=translation.js.map