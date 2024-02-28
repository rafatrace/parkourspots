import { LatLngExpression } from 'leaflet'

export type TSpot = {
  name: string
  description: string
  coordinates: LatLngExpression
  images: Array<string>
}

const spots: Array<TSpot> = [
  {
    name: 'Nordnes Oppveksttun Barnehage',
    description:
      'Hip level wall with red fence. Right on the other side, small walls with foot placement training possibilities and others.',
    coordinates: [60.397695278462095, 5.306674951647723],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/fXb4HECnWM42GPwRvL.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/cOXjIztc7ixgWPDldP.png'
    ]
  },
  {
    name: 'Damsgårdsveien 33',
    description: 'Stairway by the marina. Many possibilities.',
    coordinates: [60.37815400392495, 5.330385485776917],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/JrJ4lJ7_wkVLq7lBSf.jpg',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/GnSWnjcD6viLGdkiP7.jpg',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/Oybkg1Brn9KArubPNk.jpg',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/kH1R8NY4dPXo6H_V_B.jpg'
    ]
  },
  {
    name: 'Bergen busstasjon',
    description:
      "Small spot with different level possibilities. It's a good spot when it's raining because has some sort of cover.",
    coordinates: [60.38758002596758, 5.333832023080885],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/2eOvPRlj_vjqLAJT0q.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/IUxcumJfoBVPnTJXHt.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/pit8HnERnW6W5nN5lj.png'
    ]
  },
  {
    name: 'Bak HF-bygget',
    description:
      'This spot is divided in two sections, the low walls in the main stairs and the second part is the exit to the bicycle garage. In the stairs there is mostly precision jumps and in the other side a multitude of possibilities.',
    coordinates: [60.38759559225802, 5.317441208105554],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/XEc8vYicmKEQNG9eIA.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/xG6gWk9ZBdCOnBa0Tw.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/HSRQOhWvqo7-9MyDRa.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/-I3AksGafkrtvK4NmP.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/NqzBcRMCyfVFtzO4TB.png'
    ]
  },
  {
    name: 'Sjøfartsmuseum',
    description:
      'Small stairway close to the museum with small challenges. Usually good for warming up since it is close to other spots.',
    coordinates: [60.38694834474547, 5.319508496254616],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/jnY69ySXWwloAEjY2R.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/heJUdSdXkVG8DjA_Zu.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/EUwQGew4dx7QTWi_df.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/UPkb6ZDiLYlSVN4CIu.png'
    ]
  },
  {
    name: 'Realfagbygget',
    description:
      'Stairway with many possibilites to all skill levels. With single movements and entire lines possible as well.',
    coordinates: [60.38559113768296, 5.327001280888473],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/7XTYYO97UAO-Zo_szo.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/0h_1OOngoCzuBmaPxl.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/f4NrGCmf2ZnRG875ys.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/-qf3iVTPjSqizR4Khu.png'
    ]
  },
  {
    name: 'Media City',
    description:
      "Small garden in behind Media city offices with many possibilities. It's a good spot to warm up and also to come up with some creative line ideas.",
    coordinates: [60.384859470194485, 5.333312726986273],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/X2f7tGjSjcBNi6ScRg.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/H1GIMr6YhvCr1o-PWI.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/Xo8Fz1bTnDgLEKhjJu.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/ZJC3ngAna-bkJQob70.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/MIX_re1gHFJlgJROcB.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/B4ngec2lSdpFveWnG1.png'
    ]
  },
  {
    name: 'Studentsenteret',
    description:
      'Staircase with many taller walls around it in different height levels. Around it there is also a big sculpture with some buildering options. Other smaller walls and stairs around it.',
    coordinates: [60.38631101761486, 5.323282809397155],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/52TGGnVQdP5LKxJ6re.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/fyfGOTYUs-iWtBNPps.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/2sICgq_4cSkWlicBCZ.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/vHyUPHdUr7pH_uuesw.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/gwI_orkNMu19hN2yGH.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/mkFFB7fOgao9utd6IQ.png'
    ]
  },
  {
    name: 'Center for Space Science',
    description:
      'Staircase with different possibilities a bit scattered around the area. From small challenges to connected lines.',
    coordinates: [60.384158310804736, 5.329662437846938],
    images: [
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/rFaTmGJLIXjzu58VE6.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/eyms5vSezkp2PLyCtn.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/v5maOB4GkZx_-vz80G.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/GamOMpByRMuqqWN4Om.png',
      'http://db.rafa.a2hosted.com/download/noco/Leap/Spots/Images/vip_nJfXo4wLYkijWb.png'
    ]
  }
]

export default spots
