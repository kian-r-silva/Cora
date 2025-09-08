import {defineField, defineType} from 'sanity'

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Recipe Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFavorite',
      title: 'Featured Recipe',
      description: 'Mark as a featured recipe to display on homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      description: 'A preview image for the recipe card',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'recipePdf',
      title: 'Recipe PDF',
      type: 'file',
      options: {
        accept: 'application/pdf'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Breakfast', value: 'Breakfast'},
          {title: 'Lunch', value: 'Lunch'},
          {title: 'Dinner', value: 'Dinner'},
          {title: 'Dessert', value: 'Dessert'},
          {title: 'Appetizer', value: 'Appetizer'},
          {title: 'Drink', value: 'Drink'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnailImage',
      favorite: 'isFavorite',
    },
    prepare(selection) {
      const {title, media, favorite} = selection
      return {
        title: favorite ? `★ ${title}` : title,
        media: media || undefined,
      }
    },
  },
})