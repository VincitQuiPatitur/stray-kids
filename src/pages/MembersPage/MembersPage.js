import React, {useEffect, useState} from "react";
import "./MembersPage.scss"
import MembersCardList from "../../components/MembersCardList/MembersCardList";
import MemberInfo from "../../components/MemberInfo/MemberInfo";
import {getMembers} from "../../utils/MembersApi";
//import { members } from "../../data/membersData";
function MembersPage() {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        getMembers()
            .then((data) => {
                setMembers(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleCardClick = (member) => {
        setSelectedMember(member)
    }

    return (
        <main className="members">
            <MembersCardList
                members={members}
                onCardClick={handleCardClick}
            />
            <MemberInfo
                member={selectedMember}
            />
        </main>
    );
}

export default MembersPage;