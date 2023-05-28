import React from "react";
import "./GroupDescription.scss";
import groupPhoto from "../../images/other/allMembers.jpg";

function GroupDescription() {
    return (
        <section className="description">
            <h1 className="description__title">Welcome to&nbsp;Stray Kids&rsquo; fan page!</h1>
            <div className="description__container">
                <div className="description__text">
                    <h2 className="description__text-title">Do&nbsp;you know Stray Kids?</h2>
                    <p className="description__text-paragraph">It's&nbsp;a&nbsp;South Korean boy band consisting of&nbsp;8&nbsp;members. It&nbsp;was formed by&nbsp;JYP Entertainment in&nbsp;2017&nbsp;as a&nbsp;result of&nbsp;a&nbsp;reality show.</p>
                    <p className="description__text-paragraph">And there should be at least one more paragraph, but I have absolutely no idea what to write. . .</p>
                </div>
                <img src={groupPhoto} alt="Stray Kids members" className="description__image"/>
            </div>
        </section>
    );
}

export default GroupDescription;