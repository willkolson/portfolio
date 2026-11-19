import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Will Olson Portfolio',

  projectId: 'mo4faci3',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
    // Keep "Site settings" out of the global "Create new" menu (it's a singleton)
    templates: (templates) => templates.filter(({schemaType}) => schemaType !== 'siteSettings'),
  },
})
