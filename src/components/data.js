import { FaFacebook, FaInstagram } from "react-icons/fa"

import image1 from "../images/home/image1.jpg"
import image2 from "../images/home/image2.jpg"
import image3 from "../images/home/image3.jpg"

import machine1 from "../images/machines/akiraseiki.jpeg"
import machine2 from "../images/machines/hyundaif500.png"
import machine3 from "../images/machines/akira-seiki.png"
import machine4 from "../images/machines/powermax.png"
import machine5 from "../images/machines/yunnan.png"
import machine6 from "../images/machines/jetko.png"
import machine7 from "../images/machines/goodway.png"
import machine8 from "../images/machines/toz-satih.png"

import a01 from "../images/ref/a01.jpeg"
import a02 from "../images/ref/a02.jpeg"
import a03 from "../images/ref/a03.jpeg"
import a04 from "../images/ref/a04.jpeg"
import a05 from "../images/ref/a05.jpeg"
import a06 from "../images/ref/a06.jpeg"
import a07 from "../images/ref/a07.jpeg"
import a08 from "../images/ref/a08.jpeg"
import a09 from "../images/ref/a09.jpeg"
import a10 from "../images/ref/a10.jpeg"
import a11 from "../images/ref/a11.jpeg"
import a12 from "../images/ref/a12.jpeg"
import a13 from "../images/ref/a13.jpeg"
import a14 from "../images/ref/a14.jpeg"
import a15 from "../images/ref/a15.jpeg"
import a16 from "../images/ref/a16.jpeg"
import a17 from "../images/ref/a17.jpeg"
import a18 from "../images/ref/a18.jpeg"
import a19 from "../images/ref/a19.png"
import a20 from "../images/ref/a20.jpeg"
import a21 from "../images/ref/a21.jpeg"
import a22 from "../images/ref/a22.jpeg"
import a23 from "../images/ref/a23.jpeg"
import a24 from "../images/ref/a24.jpeg"
import a25 from "../images/ref/a25.jpeg"
import a26 from "../images/ref/a26.jpeg"
import a27 from "../images/ref/a27.jpeg"
import a28 from "../images/ref/a28.jpeg"
import a29 from "../images/ref/a29.jpeg"
import a30 from "../images/ref/a30.jpeg"
import a31 from "../images/ref/a31.jpeg"
import a32 from "../images/ref/a32.jpeg"
import a33 from "../images/ref/a33.jpeg"


export const machines = [
  {
    id: 1,
    name: "AKİRA SEIKI Performa V2.5",
    desc: "Dik İşleme Merkezi",
    img: machine1,
    model: "2019 MODEL",
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
    model: "2015 MODEL",
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
    model: "2015 MODEL",
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
    model: "2014 MODEL",
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
    model: "2014 MODEL",
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
  {
    id: 2,
    url: "/about",
    text: "Hakkımızda"
  },
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
    image: image1,
    title: "üretimde kalite",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis."
  },
  {
    id: 2,
    image: image2,
    title: "profesyonel hizmet",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis."

  },
  {
    id: 3,
    image: image3,
    title: "son teknoloji",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis."
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
    name: "Instagram Icon"
  },
  {
    id: 2,
    url: 'https://www.linkedin.com',
    icon: <FaFacebook />,
    name: "FAcebook Icon"
  }
];

export const references = [
  {id: 1, url: a01},
  {id: 2, url: a02},
  {id: 3, url: a03},
  {id: 4, url: a04},
  {id: 5, url: a05},
  {id: 6, url: a06},
  {id: 7, url: a07},
  {id: 8, url: a08},
  {id: 9, url: a09},
  {id:10, url: a10},
  {id:11, url: a11},
  {id:12, url: a12},
  {id:13, url: a13},
  {id:14, url: a14},
  {id:15, url: a15},
  {id:16, url: a16},
  {id:17, url: a17},
  {id:18, url: a18},
  {id:19, url: a19},
  {id:20, url: a20},
  {id:21, url: a21},
  {id:22, url: a22},
  {id:23, url: a23},
  {id:24, url: a24},
  {id:25, url: a25},
  {id:26, url: a26},
  {id:27, url: a27},
  {id:28, url: a28},
  {id:29, url: a29},
  {id:30, url: a30},
  {id:31, url: a31},
  {id:32, url: a32},
  {id:33, url: a33},
]