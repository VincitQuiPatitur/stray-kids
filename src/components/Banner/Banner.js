import React from "react";
import "./Banner.scss";
import bangChanPhoto from "../../images/bang-chan.jpg";
import leeKnowPhoto from "../../images/lee-know.jpg";
import changbinPhoto from "../../images/changbin.jpg";
import hyunjinPhoto from "../../images/hyunjin.jpg";
import hanPhoto from "../../images/han.jpg";
import felixPhoto from "../../images/felix.jpg";
import seungminPhoto from "../../images/seungmin.jpg";
import inPhoto from "../../images/i-n.jpg";
function Banner() {
    return (
        <section className="banner">
            <div className="banner__item">
                <img src={bangChanPhoto} className="banner__image" alt="Bang Chan" />
                <article className="banner__text">Bang Chan</article>
            </div>
            <div className="banner__item">
                <img src={leeKnowPhoto} className="banner__image" alt="Lee Know" />
                <article className="banner__text">Lee Know</article>
            </div>
            <div className="banner__item">
                <img src={changbinPhoto} className="banner__image" alt="Changbin" />
                <article className="banner__text">Changbin</article>
            </div>
            <div className="banner__item">
                <img src={hyunjinPhoto} className="banner__image" alt="Hyunjin" />
                <article className="banner__text">Hyunjin</article>
            </div>
            <div className="banner__item">
                <img src={hanPhoto} className="banner__image" alt="Han" />
                <article className="banner__text">Han</article>
            </div>
            <div className="banner__item">
                <img src={felixPhoto} className="banner__image" alt="Felix" />
                <article className="banner__text">Felix</article>
            </div>
            <div className="banner__item">
                <img src={seungminPhoto} className="banner__image" alt="Seungmin" />
                <article className="banner__text">Seungmin</article>
            </div>
            <div className="banner__item">
                <img src={inPhoto} className="banner__image" alt="I.N." />
                <article className="banner__text">I.N.</article>
            </div>
        </section>
    );
}

export default Banner;