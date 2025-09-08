import { createClient as createSanityClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Set useCdn directly here instead of importing it
const useCdn = false

// Export the client instance
export const client = createSanityClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

// Export the createClient function
export const createClient = (config = {}) => {
  return createSanityClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    ...config
  })
}
