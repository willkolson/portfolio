import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      description: 'Falls back to the page title. Aim for 50–60 characters.',
      validation: (Rule) => Rule.max(60).warning('Titles over 60 characters may be truncated in SERPs'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'Falls back to the summary/excerpt. Aim for 140–155 characters.',
      validation: (Rule) => Rule.max(160).warning('Descriptions over 160 characters may be truncated'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social share image',
      type: 'image',
      description: '1200×630 recommended. Falls back to the cover image.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines (noindex)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
