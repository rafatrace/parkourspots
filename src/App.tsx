import 'leaflet/dist/leaflet.css'
import Map from './components/Map'
import SidePanel from './components/SidePanel'
import { useState } from 'react'
import { TSpot } from './content/spots'
import Instagram from './components/Instagram'

export default function App() {
  // Local state
  const [selectedSpot, setSelectedSpot] = useState<null | TSpot>(null)

  return (
    <main>
      <Map spot={selectedSpot} setSelectedSpot={setSelectedSpot} />
      <SidePanel spot={selectedSpot} {...{ setSelectedSpot }} />
      <Instagram />
    </main>
  )
}
