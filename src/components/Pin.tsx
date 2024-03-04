import { TSpot } from '@/content/spots'
import { Marker, useMap } from 'react-leaflet'
import { Dispatch, SetStateAction } from 'react'
import L from 'leaflet'
import pinVector from '../assets/pin.svg'
import mutedVector from '../assets/mutedpin.svg'

type PinProps = {
  selectedSpot: TSpot
  spot: TSpot
  setSelectedSpot: Dispatch<SetStateAction<TSpot>>
}

export default function Pin({ selectedSpot, spot, setSelectedSpot }: PinProps) {
  // Services
  const map = useMap()

  const icon = new L.Icon({
    iconUrl: pinVector,
    iconRetinaUrl: pinVector,
    popupAnchor: [-0, -0],
    iconSize: [36, 36]
  })

  const mutedIcon = new L.Icon({
    iconUrl: mutedVector,
    iconRetinaUrl: mutedVector,
    popupAnchor: [-0, -0],
    iconSize: [36, 36]
  })

  const finalIcon = selectedSpot == null || spot === selectedSpot ? icon : mutedIcon

  return (
    <Marker
      position={spot.coordinates}
      icon={finalIcon}
      eventHandlers={{
        click: (e) => {
          map.setView(spot.coordinates)
          setTimeout(() => {
            map.invalidateSize()
          }, 299)
          setSelectedSpot(spot)
        }
      }}
    />
  )
}
