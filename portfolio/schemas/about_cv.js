export default {
  name: 'about_cv',
  title: 'About_cv',
  type: 'document',
  fields: [
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },

    {
      name: 'imgurl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'CV',
      title: 'CV',
      type: 'file',
    },
  ],
}
