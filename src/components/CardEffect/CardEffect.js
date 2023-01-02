import React, {useEffect} from 'react';
import hoverEffect from 'hover-effect';
import '../CardEffect/CardEffect.css';
import image from '../../assets/img/lacleman.jpg';
import image2 from '../../assets/img/grandbornand.jpg'
import overlay from '../../assets/img/overlay.png'


function ImageHoverEffect() {
    useEffect(()=> {
      if (!document.querySelector('.item-image .displacement-map')) {
        var image_animate = new hoverEffect({
          parent: document.querySelector(".item-image"),
          intensity: .3,
          image1: image,
          image2: image2,
          displacementImage: overlay
        });
      }
    }, [])
  return (
    <div className="ImageHoverEffect">
      <div className="card__container">
        <div className="item">
          <div className="item-header">
            <div className="item-header-heading">Haute-savoie</div>
            <div className="item-header-heading2">Where I live</div>
          </div>
          <div className="item-image"></div>
          <div className="item-footer">
            <div className="item-footer-quote">France</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageHoverEffect;