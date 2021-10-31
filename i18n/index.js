const DEFAULT_LANGUAGE = 'en'
const SUPPORTED_LANGUAGES = new Set(['en', 'sv'])
const languageFromQueryParams = getLanguageFromParams()
const languageFromBrowser = getLanguageFromBrowser()
const language = languageFromQueryParams || languageFromBrowser

// Helpful functions below
function getLanguageFromParams() {
  const fromParams = new URLSearchParams(location.search).get('lang')
  return SUPPORTED_LANGUAGES.has(fromParams) ? fromParams : undefined
}

function getLanguageFromBrowser() {
  const fromBrowser = window.navigator.language.split('-')[0]
  return SUPPORTED_LANGUAGES.has(fromBrowser) ? fromBrowser : undefined
}

function toggleLanguage() {
  const newQuery = new URLSearchParams(location.search)
  newQuery.set('lang', language === 'sv' ? 'en' : 'sv')
  window.location.search = '?' + newQuery.toString()
}

function get(obj, key) {
  const attributes = key.split('.')

  return attributes.reduce((acc, attribute) => {
    if (!acc[attribute]) {
      throw new Error(`Missing translation for ${key} (${language})`)
    }

    return acc[attribute]
  }, obj)
}

function t(key) {
  return get(i18n[language], key)
}

function setUpTranslation() {
  setLanguageToQueryParams(language)

  const elementsToTranslate = document.querySelectorAll('[t]')

  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('t')
    const translation = get(i18n[language], key)

    element.innerHTML = translation
  })
}

function setLanguageToQueryParams(language) {
  const params = new URLSearchParams(location.search)

  if (params.get('lang') !== language) {
    params.set('lang', language)
    const url = window.location.origin + window.location.pathname + '?' + params.toString();
    window.history.replaceState({ url }, '', url)
  }
}
// ------------------

setUpTranslation()
