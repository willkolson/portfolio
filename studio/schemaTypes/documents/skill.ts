import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Technical SEO', 'Content Strategy', 'Analytics & Experimentation', 'Development', 'Tools'],
      },
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'category'}},
})
