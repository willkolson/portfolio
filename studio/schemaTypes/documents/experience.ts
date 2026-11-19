import {defineArrayMember, defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({name: 'company', title: 'Company', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'role', title: 'Role / title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'startDate', title: 'Start date', type: 'date', validation: (Rule) => Rule.required()}),
    defineField({name: 'endDate', title: 'End date', type: 'date', description: 'Leave empty if current'}),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  orderings: [{title: 'Most recent', name: 'startDesc', by: [{field: 'startDate', direction: 'desc'}]}],
  preview: {select: {title: 'company', subtitle: 'role'}},
})
