import { ButtonBack, ButtonNext, CarouselProvider, Image, ImageWithZoom, Slide, Slider } from 'pure-react-carousel'
import styles from './styles.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css'

type CarouselProps = {
  images: string[]
}

export default function Carousel({ images }: CarouselProps) {
  return (
    <CarouselProvider
      className={styles.carousel}
      naturalSlideWidth={4}
      naturalSlideHeight={5}
      totalSlides={images.length}
      step={1}
      dragStep={1}
      visibleSlides={2}
    >
      <Slider>
        {images.map((source, index) => (
          <Slide key={index} index={0} className={styles.slide}>
            <ImageWithZoom src={source} className={styles.image} />
          </Slide>
        ))}
      </Slider>
      {images.length > 2 && (
        <>
          <ButtonBack className={styles.back}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.75 10.5L5.25 7L8.75 3.5"
                stroke="#5C5C5C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <ButtonNext className={styles.next}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="#5C5C5C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </>
      )}
    </CarouselProvider>
  )
}
