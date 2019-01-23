import accepts from 'accepts'
import { LOCALE_COOKIE_NAME } from './constants'

function extractLocalesFromReq (req) {
  const cookieLocale = req.cookies[LOCALE_COOKIE_NAME]
  if (cookieLocale) {
    return [cookieLocale]
  }
  return accepts(req).languages() || []
}

export default extractLocalesFromReq
