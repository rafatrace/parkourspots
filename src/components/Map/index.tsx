import spots, { TSpot } from '@/content/spots'
import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './styles.module.css'
import { Dispatch, SetStateAction } from 'react'
import cn from 'classnames'
import Pin from '../Pin'

type MapProps = {
  spot: TSpot
  setSelectedSpot: Dispatch<SetStateAction<TSpot>>
}

export default function Map({ spot, setSelectedSpot }: MapProps) {
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
