import type {StructureResolver} from 'sanity/structure'

// Site settings is a singleton: one document, always opened directly.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('caseStudy').title('Case studies'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('skill').title('Skills'),
    ])
