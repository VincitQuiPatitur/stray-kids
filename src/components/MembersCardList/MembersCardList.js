import React from "react";
import MembersCard from "../MembersCard/MembersCard";
import "./MembersCardList.scss";

function MembersCardList({ members, onCardClick }) {
    return (
        <section className="cards">
            {members.map(member => (
                <MembersCard
                    key={member.id}
                    member={member}
                    onClick={() => onCardClick(member)}
                />
            ))}
        </section>
    );
}

export default MembersCardList;