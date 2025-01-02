import { useState, useEffect } from 'react'
import Poster from "./Poster.jsx"
import { galleryData } from "../data/galleryData.js"
import galleryItemStyles from "../styles/galleryItem.module.scss"

const Gallery = ({ galleryIndex }) => {
    const [showPoster, setShowPoster] = useState(-1)

    return (
        <>
            <div id="gallery" className="gallery">
                {galleryData[galleryIndex].map((drawing, index) => <GalleryItem key={index} setShowPoster={setShowPoster} gallery={galleryIndex} index={index} />)}
            </div>
            {showPoster != -1 && <Poster index={showPoster} gallery={galleryIndex} setShowPoster={setShowPoster} />}
        </>
    )
}



export const GalleryItem = ({ setShowPoster, gallery, index }) => {

    const [particularStyles, setParticularStyles] = useState({
        backgroundImage: `url(${galleryData[gallery][index].src})`,
        backgroundSize: '100%',
        transition: '0'
    })



    const sizeMultip = 1.2

    const sizeHandler = (move) => {
        switch (move) {
            case 'enter':
                setParticularStyles({ ...particularStyles, backgroundSize: `${sizeMultip * parseInt(particularStyles.backgroundSize)}%`, transition: '.2s' })
                break;
            case 'leave':
                setParticularStyles({ ...particularStyles, backgroundSize: `${parseInt(particularStyles.backgroundSize) / sizeMultip}%` })
                break;
        }
    }

    useEffect(() => {
        setParticularStyles({
            backgroundImage: `url(${galleryData[gallery][index].src})`,
            backgroundSize: galleryData[gallery][index].thumnailSize,
            transition: ''
        })
    }, [gallery])

    return (
        <div className={`${galleryItemStyles["gallery-item"]} drawing`} onClick={() => setShowPoster(index)} style={particularStyles} onMouseEnter={() => sizeHandler('enter')} onMouseLeave={() => sizeHandler('leave')} ></div>
    )
}

export default Gallery