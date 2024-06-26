import cameraIcon from 'assets/icon/products/camera_32px.png';
import displayIcon from 'assets/icon/products/display_32px.png';
import hdtvIcon from 'assets/icon/products/hdtv_32px.png';
import headphoneIcon from 'assets/icon/products/headphones_32px.png';
import laptopIcon from 'assets/icon/products/laptop_32px.png';
import mainboardIcon from 'assets/icon/products/mainboard_32px.png';
import mobileIcon from 'assets/icon/products/mobile_32px.png';
import mouseIcon from 'assets/icon/products/mouse_32px.png';
import ramIcon from 'assets/icon/products/ram_32px.png';
import routerIcon from 'assets/icon/products/router_32px.png';
import speakerIcon from 'assets/icon/products/speaker_32px.png';
import ssdIcon from 'assets/icon/products/ssd_32px.png';
import keyboardIcon from 'assets/icon/products/keyboard_32px.png';

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    key: 0,
    to: '/filter?t=0',
    icon: laptopIcon,
    title: 'Áo Thời Trang Nam',
  },
  {
    key: 0,
    to: '/filter?t=0',
    icon: ssdIcon,
    title: 'Áo Thời Trang Nữ',
  },
  {
    key: 1,
    to: '/filter?t=1',
    icon: ramIcon,
    title: 'Quần Nam Nữ',
  },
  {
    key: 2,
    to: '/filter?t=9',
    icon: hdtvIcon,
    title: 'Bộ Thể Thao',
  },
];

function MenuFilter(props) {
  const { onShow } = props;

  function renderFilterMenu(list) {
    return (
      list &&
      list.map((item, index) => {
        return (
          <div
            onMouseEnter={() => onShow(item.key)}
            key={index}
            className="w-100 p-lr-8 p-tb-4  Filter-menu-item">
            <Link to={item.to} className="d-flex align-i-center">
              <img src={item.icon} className="icon m-lr-8" />
              <span className="title">{item.title}</span>
            </Link>
          </div>
        );
      })
    );
  }

  return (
    <div className="bor-rad-8 Filter-menu p-tb-4">{renderFilterMenu(menu)}</div>
  );
}

MenuFilter.propTypes = {
  onShow: PropTypes.func,
};

export default MenuFilter;
