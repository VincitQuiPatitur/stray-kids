import React from "react";
function MembersCard({ member, onClick }) {
    return (
        <div className="cards__item" onClick={onClick}>
            <img className="cards__image" src={member.photoCard} alt={member.name} />
            <span className="cards__tooltip">{member.name}</span>
        </div>
    );
}

export default MembersCard;