import { FaFacebook, FaInstagram } from "react-icons/fa"

import image1_small from "../images/home/image1_small.jpg"
import image1_medium from "../images/home/image1_medium.jpg"
import image1_large from "../images/home/image1_large.jpg"
import image2_small from "../images/home/image2_small.jpg"
import image2_medium from "../images/home/image2_medium.jpg"
import image2_large from "../images/home/image2_large.jpg"
import image3_small from "../images/home/image3_small.jpg"
import image3_medium from "../images/home/image3_medium.jpg"
import image3_large from "../images/home/image3_large.jpg"
import image4_small from "../images/home/image4_small.jpg"
import image4_medium from "../images/home/image4_medium.jpg"
import image4_large from "../images/home/image4_large.jpg"
import image5_small from "../images/home/image5_small.jpg"
import image5_medium from "../images/home/image5_medium.jpg"
import image5_large from "../images/home/image5_large.jpg"

import machine1 from "../images/machines/akira-seiki-v2.5.jpg"
import machine2 from "../images/machines/hyundai-f500.jpg"
import machine3 from "../images/machines/akira-seiki-v4.5.jpg"
import machine4 from "../images/machines/powermax.jpg"
import machine5 from "../images/machines/yunnan.jpg"
import machine6 from "../images/machines/jetko.jpg"
import machine7 from "../images/machines/goodway.jpg"
import machine8 from "../images/machines/toz-satih.jpg"
import machine9 from "../images/machines/hyundai-f4600.jpg"


import a01 from "../images/ref/a01.jpg"
import a02 from "../images/ref/a02.jpg"
import a03 from "../images/ref/a03.jpg"
import a04 from "../images/ref/a04.jpg"
import a05 from "../images/ref/a05.jpg"
import a06 from "../images/ref/a06.jpg"
import a07 from "../images/ref/a07.jpg"
import a08 from "../images/ref/a08.jpg"
import a09 from "../images/ref/a09.jpg"
import a10 from "../images/ref/a10.jpg"
import a11 from "../images/ref/a11.jpg"
import a12 from "../images/ref/a12.jpg"
import a13 from "../images/ref/a13.jpg"
import a14 from "../images/ref/a14.jpg"
import a15 from "../images/ref/a15.jpg"
import a16 from "../images/ref/a16.jpg"
import a17 from "../images/ref/a17.jpg"
import a18 from "../images/ref/a18.jpg"
import a19 from "../images/ref/a19.jpg"
import a20 from "../images/ref/a20.jpg"
import a21 from "../images/ref/a21.jpg"
import a22 from "../images/ref/a22.jpg"
import a23 from "../images/ref/a23.jpg"
import a24 from "../images/ref/a24.jpg"
import a25 from "../images/ref/a25.jpg"
import a26 from "../images/ref/a26.jpg"
import a27 from "../images/ref/a27.jpg"
import a28 from "../images/ref/a28.jpg"
import a29 from "../images/ref/a29.jpg"
import a30 from "../images/ref/a30.jpg"
import a31 from "../images/ref/a31.jpg"
import a32 from "../images/ref/a32.jpg"
import a33 from "../images/ref/a33.jpg"

export const machines = [
  {
    id: 0,
    model: "2021 Model",
    name: "HYUNDAI F4600 II",
    desc: "Dik İşleme Merkezi",
    img: machine9,
    specs: {
      spec1: "X-Y-Z Eksen Hareketleri: 1050-600-600 mm",
      spec2: "8000 rpm",
      spec3: "Direct Drive Spindle",
      spec4: "Dijital Servo",
      spec5: "3 Eksen Lineer Kızak"
    },
    type: "Masuralı Tip"
  },
  {
    id: 1,
    name: "AKIRA SEIKI Performa V2.5",
    desc: "Dik İşleme Merkezi",
    img: machine1,
    model: "2019 Model",
    specs: {
      spec1: "X-Y-Z Eksen Hareketleri: 760-435-520 mm",
      spec2: "12000 rpm",
      spec3: "Direct Drive Spindle",
      spec4: "Dijital Servo",
      spec5: "3 Eksen Lineer Kızak"
    },
    type: "Masuralı Tip"
  },
  {
    id: 2,
    name: "HYUNDAI F500 PLUS",
    desc: "Dik İşleme Merkezi",
    img: machine2,
    model: "2016 Model",
    specs: {
      spec1: "X-Y-Z Eksen Hareketleri: 1050-600-600 mm",
      spec2: "8000 rpm",
      spec3: "Direct Drive Spindle",
      spec4: "Dijital Servo",
      spec5: "3 Eksen Lineer Kızak"
    },
    type: "Masuralı Tip"
  },
  {
    id: 3,
    name: "AKIRA SEIKI Performa V4.5",
    desc: "Dik İşleme Merkezi",
    img: machine3,
    model: "2015 Model",
    specs: {
      spec1: "X-Y-Z Eksen Hareketleri: 1150-650-650 mm",
      spec2: "12000 rpm",
      spec3: "Direct Drive Spindle",
      spec4: "Dijital Servo",
      spec5: "3 Eksen Lineer Kızak Roller"
    },
    type: "Masuralı Tip"
  },
  {
    id: 4,
    name: "POWER MAX SV-105 L",
    desc: "Dik İşleme Merkezi",
    img: machine4,
    model: "2014 Model",
    specs: {
      spec1: "X-Y-Z Eksen Hareketleri: 1050-600-600 mm",
      spec2: "10000 rpm",
      spec3: "Direct Drive Spindle"
    },
    type: "Masuralı Tip"
  },
  {
    id: 5,
    name: "YUNNAN CY 6250 B Universal",
    desc: "Torna Tezgahı",
    img: machine5,
    model: "2014 Model",
    specs: {
      spec1: "Çap: 500 mm",
      spec2: "Boy: 2000 mm",
      spec3: "Fener Mili: 85 mm"
    }
  },
  {
    id: 6,
    name: "JETCO JVHM-3",
    desc: "Kalıpçı Frezesi",
    img: machine6,
    model: "2014 Model",
    specs: {
      spec1: "Tabla Eksenel Hareketleri: 600 x 280 x 320 mm",
      spec2: "İşmili Hız Aralığı (Dikey) 16 Kademe / 80-5.400",
      spec3: "İşmili Hız Aralığı (Yatay) 12 Kademe / 40-1.300"
    }
  },
  {
    id: 7,
    name: "GOODWAY TB-150",
    desc: "CNC Torna",
    img: machine7,
    model: "2003 Model",
    specs: {
      spec1: "Tornalama: Çap: 220 mm Boy: 325 mm",
      spec2: "6000rpm. Spindle",
      spec3: "2 Eksende Lineer Kızak"
    }
  },
  {
    id: 8,
    name: "TOZ-SATIH",
    desc: "Taşlama",
    img: machine8,
    model: "1994 Model",
    specs: {
      spec1: "X-Y-Z Eksen Hareketleri: 900-380-200 mm",
    },
  },
]

export const pages = [
  {
    id: 1,
    url: "/",
    text: "Ana Sayfa"
  },
  // {
  //   id: 2,
  //   url: "/about",
  //   text: "Hakkımızda"
  // },
  {
    id: 3,
    url: "/machines",
    text: "Makine Parkuru"
  },
  {
    id: 4,
    url: "/references",
    text: "Referanslar"
  },
  {
    id: 5,
    url: "/contact",
    text: "İletişim"
  },
]

export const pics = [
  {
    id: 1,
    img_small: image1_small,
    img_medium: image1_medium,
    img_large: image1_large,
    title: "üretimde kalite",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis."
  },
  {
    id: 2,
    img_small: image2_small,
    img_medium: image2_medium,
    img_large: image2_large,
    title: "profesyonel hizmet",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis."

  },
  {
    id: 3,
    img_small: image3_small,
    img_medium: image3_medium,
    img_large: image3_large,
    title: "son teknoloji",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis."
  },
  {
    id: 4,
    img_small: image4_small,
    img_medium: image4_medium,
    img_large: image4_large,
    title: "son teknoloji",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis."
  },
  {
    id: 5,
    img_small: image5_small,
    img_medium: image5_medium,
    img_large: image5_large,
    title: "son teknoloji",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis."
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.instagram.com/p/CEUlB6BJCIv/',
    icon: <FaInstagram />,
    name: "Instagram Icon"
  },
  {
    id: 2,
    url: 'https://www.facebook.com/enkamakinakalip',
    icon: <FaFacebook />,
    name: "FAcebook Icon"
  }
];

export const references = [
  { id: 1, url: a01, alt: "reference company's logo" },
  { id: 2, url: a02, alt: "reference company's logo" },
  { id: 3, url: a03, alt: "reference company's logo" },
  { id: 4, url: a04, alt: "reference company's logo" },
  { id: 5, url: a05, alt: "reference company's logo" },
  { id: 6, url: a06, alt: "reference company's logo" },
  { id: 7, url: a07, alt: "reference company's logo" },
  { id: 8, url: a08, alt: "reference company's logo" },
  { id: 9, url: a09, alt: "reference company's logo" },
  { id: 10, url: a10, alt: "reference company's logo" },
  { id: 11, url: a11, alt: "reference company's logo" },
  { id: 12, url: a12, alt: "reference company's logo" },
  { id: 13, url: a13, alt: "reference company's logo" },
  { id: 14, url: a14, alt: "reference company's logo" },
  { id: 15, url: a15, alt: "reference company's logo" },
  { id: 16, url: a16, alt: "reference company's logo" },
  { id: 17, url: a17, alt: "reference company's logo" },
  { id: 18, url: a18, alt: "reference company's logo" },
  { id: 19, url: a19, alt: "reference company's logo" },
  { id: 20, url: a20, alt: "reference company's logo" },
  { id: 21, url: a21, alt: "reference company's logo" },
  { id: 22, url: a22, alt: "reference company's logo" },
  { id: 23, url: a23, alt: "reference company's logo" },
  { id: 24, url: a24, alt: "reference company's logo" },
  { id: 25, url: a25, alt: "reference company's logo" },
  { id: 26, url: a26, alt: "reference company's logo" },
  { id: 27, url: a27, alt: "reference company's logo" },
  { id: 28, url: a28, alt: "reference company's logo" },
  { id: 29, url: a29, alt: "reference company's logo" },
  { id: 30, url: a30, alt: "reference company's logo" },
  { id: 31, url: a31, alt: "reference company's logo" },
  { id: 32, url: a32, alt: "reference company's logo" },
  { id: 33, url: a33, alt: "reference company's logo" },
]