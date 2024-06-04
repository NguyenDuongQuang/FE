import { Col, Row } from 'antd';
import React from 'react';
import './index.scss';

// fn: hiển thị danh sách thương hiệu
function showBrandList(list) {
  return list.map((item, index) => (
    <Col span={12} md={6} key={index}>
      <div className="brand-item t-center">
        <a href={item.link} target="blank">
          <img className="bor-rad-8" width="100%" src={item.src} alt="Photo" />
        </a>
        <h4 className="font-size-18px">{item.title}</h4>
        <span className="font-size-16px">{item.desc}</span>
      </div>
    </Col>
  ));
}

// danh sách thương hiệu
const list = [
  {
    link: 'https://juno.vn/',
    src:
      'https://mcdn.coolmate.me/image/October2021/brand-viet-nam-1_72.jpg',
    title: 'JUNO',
    desc: 'Soái Ca Trở Lại',
  },
  {
    link: 'https://owen.vn/',
    src:
      'https://mcdn.coolmate.me/image/October2021/brand-viet-nam-3_51.jpg',
    title: 'OWEN',
    desc: 'Quần Áo Thời Trang',
  },
  {
    link: 'http://www.novelty.com.vn/',
    src:
      'https://mcdn.coolmate.me/image/October2021/brand-viet-nam-7_1.jpg',
    title: 'NOVELTY',
    desc: 'Siêu ưu đãi cùng với Novelty',
  },
  {
    link: 'https://theblues.com.vn/en/',
    src:
      'https://mcdn.coolmate.me/image/October2021/brand-viet-nam-9.jpg',
    title: 'BLUE EXCHANGE ',
    desc: 'Sản phẩm siêu chất lượng',
  },
];

// rendering ...
function FamousBrand() {
  return (
    <div className="p-16 Famous-Brand">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2 className="font-weight-700">Thương hiệu nổi bật</h2>
          <div className="underline-title"></div>
        </Col>
        {showBrandList(list)}
      </Row>
    </div>
  );
}

export default FamousBrand;
