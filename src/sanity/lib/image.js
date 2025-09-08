import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

// Export the urlForImage function
export const urlForImage = (source) => {
  if (!source) {
    return 'https://via.placeholder.com/400x300?text=No+Image'
  }
  
  return imageBuilder.image(source)
}
