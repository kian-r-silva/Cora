import {defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resume Title',
      type: 'string',
      initialValue: 'Cora Colvin Resume',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume PDF',
      type: 'file',
      options: {
        accept: 'application/pdf'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Show Resume Button',
      description: 'Toggle to show/hide the resume button on the website',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Resume',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      active: 'isActive',
    },
    prepare(selection) {
      const {title, active} = selection
      return {
        title: active ? `✓ ${title}` : `○ ${title}`,
        subtitle: active ? 'Active' : 'Hidden',
      }
    },
  },
})
