import { TSpot } from '@/content/spots'
import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './styles.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import cn from 'classnames'
import Pin from '../Pin'
import * as contentful from 'contentful'

type MapProps = {
  spot: TSpot
  setSelectedSpot: Dispatch<SetStateAction<TSpot>>
}

export default function Map({ spot, setSelectedSpot }: MapProps) {
  // Local state
  const [spots, setSpots] = useState<TSpot[]>([])

  useEffect(() => {
    const loadSpots = async () => {
      const client = contentful.createClient({
        space: 'wecn5invhqct',
        accessToken: 'KkZriah8IIA0luy7QY4nTBh3n44WNkl3drvTuUeXTFA'
      })

      const { items } = await client.getEntries({
        content_type: 'spot'
      })

      if (items != null) {
        const s = []
        items.map((item) => {
          const images = []
          if (Array.isArray(item.fields.images)) {
            item.fields.images.map((img) => {
              images.push(`https:${img.fields.file.url}`)
            })
          }

          s.push({
            name: item.fields.name,
            description: item.fields.description,
            coordinates: JSON.parse(`[${item.fields.coordinates}]`),
            images
          })
        })

        setSpots(s)
      }
    }

    loadSpots()
  }, [])

  return (
    <div
      className={cn(styles.map, {
        [styles.open]: spot != null
      })}
    >
      <MapContainer
        center={[60.38977943836305, 5.324908371244673]}
        zoom={14}
        className={styles.component}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        />
        {spots.map((s, index) => (
          <Pin key={index} selectedSpot={spot} spot={s} {...{ setSelectedSpot }} />
        ))}
      </MapContainer>
    </div>
  )
}
