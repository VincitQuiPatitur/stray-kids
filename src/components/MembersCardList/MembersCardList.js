import React from "react";
import MembersCard from "../MembersCard/MembersCard";
import "./MembersCardList.scss";
import { members } from "../../data/membersData";
function MembersCardList() {
    return (
        <section className="cards">
            {members.map(member => (
                <MembersCard key={member.id} member={member} />
            ))}
        </section>
    );
}

export default MembersCardList;