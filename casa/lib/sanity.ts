import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'

const projectId = '0p4zbjmi'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}