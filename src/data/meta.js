require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || '网站紧急状况',
    url: META_URL || '',
    description: META_DESC || 'An emergency information website.',
    lang: META_LANG || 'zh',
    primaryColor: META_COLOR || '#DB0000',
    email: META_EMAIL || 'emergency@9t.anonaddy.com',
    telephone: META_TELEPHONE || undefined,
    dateFormat: 'yyyy.LL.dd'
}
