import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import SupportPagePreview from './preview-templates/SupportPagePreview'
import NewsPostPreview from './preview-templates/NewsPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('support', SupportPagePreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
