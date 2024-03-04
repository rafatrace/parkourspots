import { LatLngExpression } from 'leaflet'

export type TSpot = {
  name: string
  description: string
  coordinates: LatLngExpression
  images: Array<string>
}
