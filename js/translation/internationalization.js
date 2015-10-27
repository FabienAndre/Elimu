function Internationalization() {

   var that = {};

   function init() {

   };

   that.initSimpleHash = function(cb) {
       var l = Internationalization.extractLanguageSimpleHash ();
       that.loadLanguage(l, cb);
   }
   that.initCompoundHash = function(cb) {
       var l = Internationalization.extractLanguageCompoundHash ();
       that.loadLanguage(l, cb);
   }


    var supported = {
        'en': 'en',
        'english': 'en',
        'es':'es',
        'spanish':'es',
        'espanol':'es',
        'español':'es',
        'fr': 'fr',
        'french': 'fr',
        'français': 'fr',
        'sw': 'sw',
        'swahili': 'sw',
    };


    that.loadLanguage = function(language, cb) {
      var isSupported = that.isSupported(language);
      var lng = isSupported ? supported[language] : 'en';
      that.language = isSupported ? language : lng;
      if (i18n.isInitialized()) {
        i18n.setLng(lng, function (t) {
              console.log("set To '"+lng+"'");
              console.log("World: " + i18n.t("World"));
              cb();
              });
      } else {
          i18n.init({lng: lng, fallbackLng: false, debug: true}, cb);
      }
      return isSupported;
   }

   that.isSupported = function(language) {
       return language in supported;
   }

   init();
   return that;
}

Internationalization.extractLanguageSimpleHash = function () {
    var hashText = window.location.hash;
    var language = hashText ? hashText.substr(1) : "";
    return language;
}

Internationalization.extractLanguageCompoundHash = function () {
    var hashText = window.location.hash;
    var path = hashText.split('/');
    var language = path[1];
    return language;
}

var polyglot = Internationalization();
