"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var Phrases;
(function (Phrases) {
    Phrases._translate = null;
    Phrases.phrasesDictionary = {
        'title': '',
        'home': '',
        'bookTransfer': '',
        'tours': '',
        'about': '',
        'language': '',
        'english': '',
        'greek': '',
        'search': '',
        'description': '',
        'georgioupolis': '',
        'creteGreece': '',
        'myName': '',
        'copyrightsReserved': ''
    };
    function setTranslateService(translate) {
        Phrases._translate = translate;
    }
    Phrases.setTranslateService = setTranslateService;
    function refreshText() {
        for (var key in Phrases.phrasesDictionary) {
            Phrases.phrasesDictionary[key] = Phrases._translate.instant(key);
        }
    }
    Phrases.refreshText = refreshText;
    function getPhrasesDictionary() {
        return Phrases.phrasesDictionary;
    }
    Phrases.getPhrasesDictionary = getPhrasesDictionary;
    function get(key) {
        return Phrases.phrasesDictionary[key];
    }
    Phrases.get = get;
})(Phrases = exports.Phrases || (exports.Phrases = {}));
//# sourceMappingURL=phrases.js.map