import { TSpot } from '@/content/spots'
import styles from './styles.module.css'
import cn from 'classnames'
import Carousel from '../Carousel'
import { Dispatch, SetStateAction } from 'react'

type SidePanelProps = {
  spot: TSpot
  setSelectedSpot: Dispatch<SetStateAction<TSpot | null>>
}

export default function SidePanel({ spot, setSelectedSpot }: SidePanelProps) {
  const lat = spot?.coordinates[0]
  const long = spot?.coordinates[1]

  return (
    <div
      className={cn(styles.panel, {
        [styles.open]: spot != null
      })}
    >
      {spot != null && (
        <>
          <div className={styles.close} onClick={() => setSelectedSpot(null)}>
            Close
          </div>
          <Carousel images={spot.images} />
          <div className={styles.content}>
            <h1>📍 {spot.name}</h1>
            <p>{spot.description}</p>
            <a
              href={`https://www.google.com/maps/dir//${lat},${long}/@${lat},${long},17.19z/data=!4m2!4m1!3e0?entry=ttu`}
              target="_blank"
              className={styles.button}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5993_86)">
                  <path
                    d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07537 2.63214 3.54924 3.75736 2.42403C4.88258 1.29881 6.4087 0.666667 8 0.666667C9.5913 0.666667 11.1174 1.29881 12.2426 2.42403C13.3679 3.54924 14 5.07537 14 6.66667Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5993_86">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Get directions</span>
            </a>
          </div>
        </>
      )}
    </div>
  )
}
