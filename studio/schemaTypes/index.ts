import {seo} from './objects/seo'
import {metric} from './objects/metric'
import {blockContent} from './objects/blockContent'
import {siteSettings} from './documents/siteSettings'
import {caseStudy} from './documents/caseStudy'
import {experience} from './documents/experience'
import {skill} from './documents/skill'
import {post} from './documents/post'

export const schemaTypes = [
  // objects
  seo,
  metric,
  blockContent,
  // documents
  siteSettings,
  caseStudy,
  experience,
  skill,
  post,
]
