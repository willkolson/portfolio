import {defineField, defineType} from 'sanity'

export const metric = defineType({
  name: 'metric',
  title: 'Result metric',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g. "+42%", "3.1x", "$1.2M pipeline"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "non-brand organic sessions"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'context',
      title: 'Context',
      type: 'string',
      description: 'Timeframe or baseline, e.g. "YoY, 6 months post-launch"',
    }),
  ],
  preview: {
    select: {title: 'value', subtitle: 'label'},
  },
})
