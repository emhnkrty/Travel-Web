import React, { useEffect } from "react";
import "./main.css";
import img from "../../Assets/img(1).jpg";
import img1 from "../../Assets/img(2).jpg";
import img3 from "../../Assets/img(3).jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "İspanya",
    location: "Barcelona",
    grade: "Cultural Relax",
    fees: "$1150",
    description:
      "Avrupa'nın güneybatısında, İber Yarımadası'nda yer alan ülkedir. Güneyde ve doğuda Akdeniz'e, kuzeyde ise Atlantik Okyanusu'na kıyısı vardır. Batıda Portekiz, kuzeyde Fransa, Andorra ve güneyde Birleşik Krallık (Cebelitarık) ile komşudur. İspanya toprakları ayrıca Akdeniz'de Balear Adaları, Atlantik Okyanusu'nda Kanarya Adaları'nı ve Kuzey Afrika'da Ceuta ve Melilla adlı iki özerk şehri de kapsar.",
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: "İtalya",
    location: "Venedik",
    grade: "Cultural Relax",
    fees: "$1200",
    description:
      "Venedik, Veneto bölgesinin başkentidir. 2009 yılında Venedik komününde 270.098 kişi yaşıyordu. (Bu nüfusun 60.000'i tarihi Venedik şehrinde, 176.000'i Mestre ve Marghera şehirlerinde, 31.000' ise deniz kulağı üzerindeki diğer adalardadır.) Padova ve Treviso şehirleriyle birlikte oluşan Padova-Treviso-Venedik Metropolitan Bölgesi (PATREVE)'nin toplam nüfusu 1.600.000'dir. PATREVE herhangi bir özerkliği bulunmayan, sadece istatistiksel bir bölgedir.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "İsviçre",
    location: "Alps",
    grade: "Cultural Relax",
    fees: "$1750",
    description:
      "İsviçre, denize kıyısı olmayan, Alpler, İsviçre Platosu ve Jura Dağları arasında bölünen, 41.285 km² yüzölçümüne sahip bir ülkedir.[5] Alpler toprakların daha fazla bölümünü işgal ederken yaklaşık 8,5 milyon insandan oluşan İsviçreli nüfus çoğunlukla en büyük şehirlerin bulunduğu platoda yoğunlaşmıştır. Bu şehirlerin arasında iki küresel kent ve ekonomik merkez olan Zürih ve Cenevre de vardır. ",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <LuClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;