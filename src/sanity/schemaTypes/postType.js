import {defineField, defineType} from 'sanity'

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'altText',
      type: 'string',
      title: 'Alt Text',
      description: 'Alternative text for accessibility',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'image',
    },
  },
})
