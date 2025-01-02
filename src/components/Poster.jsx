import galleryData from "../data/galleryData"
import posterStyles from "../styles/poster.module.scss"
import xImage from "/images/other/x.png"
import prevImage from "/images/other/previous.png"
import nextImage from "/images/other/next.png"
import useIsMobile from "../hooks/useIsMobile"
import { useEffect, useState } from 'react'

const Poster = ({ index, setShowPoster, gallery }) => {
  const changePoster = (dir, ev) => {
    ev.stopPropagation();
    const indexToSet = index + dir < 0 ? galleryData[gallery].length - 1 : index + dir > galleryData[gallery].length - 1 ? 0 : index + dir
    setShowPoster(indexToSet)
  }


  if (!useIsMobile()) {
    return (
      <>
        <div className={posterStyles['poster-container']} onClick={() => { setShowPoster(-1) }}>
          <div className={posterStyles['side-block']}>
            <img className={posterStyles['poster-button-hover']} alt="previous" src={prevImage} onClick={(ev) => { changePoster(-1, ev) }} role="button" />
          </div>

          <img className={posterStyles['poster']} src={galleryData[gallery][index].src} onClick={ev => ev.stopPropagation()} />
          <div className={posterStyles['side-block']}>
            <img className={`${posterStyles.close} ${posterStyles['poster-button-hover']}`} src={xImage} onClick={() => { setShowPoster(-1) }} role="button" />
            <img src={nextImage} alt="next" className={posterStyles['poster-button-hover']} onClick={(ev) => { changePoster(1, ev) }} role="button" />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={posterStyles['poster-container']} onClick={() => { setShowPoster(-1) }}>
          <img className={`${posterStyles.close} ${posterStyles['poster-button-hover']}`} src={xImage} onClick={() => { setShowPoster(-1) }} role="button" />
          <img className={posterStyles['poster']} src={galleryData[gallery][index].src} onClick={ev => ev.stopPropagation()} />
          <div className={posterStyles['bottom-block']}>
            <img className={posterStyles['poster-button-hover']} src={prevImage} onClick={(ev) => { changePoster(-1, ev) }} role="button" />
            <img src={nextImage} alt="next" className={posterStyles['poster-button-hover']} onClick={(ev) => { changePoster(1, ev) }} role="button" />
          </div>
        </div>
      </>
    )
  }

}

export default Poster