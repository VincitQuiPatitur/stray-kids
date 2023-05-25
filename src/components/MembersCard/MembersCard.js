import React from "react";
function MembersCard({ member }) {
    return (
        <div className="cards__item">
            <img className="cards__image" src={member.photo} alt={member.name} />
            <span className="cards__tooltip">{member.name}</span>
        </div>
    );
}

export default MembersCard;