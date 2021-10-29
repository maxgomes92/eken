const DEFAULT_LANGUAGE = 'en'
const SUPPORTED_LANGUAGES = new Set(['en', 'sv'])
const languageFromQueryParams = new URLSearchParams(location.search).get('lang')

let initialLanguage = window.navigator.language.split('-')[0]
  
if (!SUPPORTED_LANGUAGES.has(initialLanguage)) {
  initialLanguage = DEFAULT_LANGUAGE
}

function toggleLanguage () {
  setLanguageToQueryParams(languageFromQueryParams === 'sv' ? 'en' : 'sv')
}

function get (obj, key) {
  const attributes = key.split('.')

  return attributes.reduce((acc, attribute) => {
    return acc[attribute]
  }, obj)
}

function t (key) {
  const language = languageFromQueryParams || initialLanguage
  
  return get(i18n[language], key)
}

function setUpTranslation (language) {
  setLanguageToQueryParams(language)

  const elementsToTranslate = document.querySelectorAll('[t]')
  
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('t')
    const translation = get(i18n[language], key)
  
    element.innerHTML = translation
  })    
}

function setLanguageToQueryParams (language) {
  const params = new URLSearchParams(location.search)

  if (params.get('lang') !== language) {
    params.set('lang', language)
    location.search = '?' + params.toString()
  }
}

setUpTranslation(languageFromQueryParams || initialLanguage)