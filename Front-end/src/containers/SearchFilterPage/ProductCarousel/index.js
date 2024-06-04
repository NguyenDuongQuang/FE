import { Carousel } from 'antd';
import React from 'react';
import './index.scss';

// Do cả chương trình chỉ có 1 list carousel
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  'https://w6k8u7f5.stackpathcdn.com/wp-content/uploads/2022/04/APRIL2022_DeLaunes_DigitalCoupon_Banner-2048x171.jpg',
  'https://cloudlearn.co.uk/pix/NHS-overlay2.png?ver=984b859c77',
  'https://th.bing.com/th/id/R.379815d9151b3a8d464e44e99201e512?rik=mFMmziHEwwMx3A&riu=http%3a%2f%2fcio-tomorrow.com%2fimages%2f2022%2fheader%2fciot22_web_header_f2-3.jpg&ehk=0%2ffuLFwD2yYKIXe0JDl0zm8zF%2bn38G57xNg2kTtKLFg%3d&risl=&pid=ImgRaw&r=0',
];

function ProductCarousel() {
  return (
    <Carousel className="Product-Carousel m-tb-24 bor-rad-8" autoplay>
      {list.map((item, index) => (
        <img
          className="Product-Carousel-img bor-rad-8"
          src={item}
          key={index}
        />
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
