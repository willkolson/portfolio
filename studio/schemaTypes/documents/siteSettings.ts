import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Full name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'headline', title: 'Headline', type: 'string', description: 'One line under your name on the homepage'}),
    defineField({name: 'bio', title: 'Short bio', type: 'text', rows: 4}),
    defineField({
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
    }),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'github', title: 'GitHub URL', type: 'url'}),
    defineField({name: 'resume', title: 'Résumé (PDF)', type: 'file', options: {accept: '.pdf'}}),
    defineField({name: 'seo', title: 'Default SEO', type: 'seo'}),
  ],
  preview: {prepare: () => ({title: 'Site settings'})},
})
