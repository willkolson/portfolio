import {defineArrayMember, defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 80},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'publishedAt', title: 'Published', type: 'datetime', validation: (Rule) => Rule.required()}),
    defineField({name: 'updatedAt', title: 'Last updated', type: 'datetime', description: 'Used for dateModified in schema markup'}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: (Rule) => Rule.max(200)}),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
    }),
    defineField({name: 'body', title: 'Body', type: 'blockContent'}),
    defineField({
      name: 'skills',
      title: 'Topics',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'skill'}]})],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  orderings: [{title: 'Newest', name: 'publishedDesc', by: [{field: 'publishedAt', direction: 'desc'}]}],
  preview: {select: {title: 'title', subtitle: 'publishedAt', media: 'coverImage'}},
})
