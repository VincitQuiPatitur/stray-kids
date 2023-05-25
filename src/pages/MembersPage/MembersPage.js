import React, {useState} from "react";
import "./MembersPage.scss"
import MembersCardList from "../../components/MembersCardList/MembersCardList";
import MemberInfo from "../../components/MemberInfo/MemberInfo";
import { members } from "../../data/membersData";
function MembersPage() {
    const [selectedMember, setSelectedMember] = useState(null);

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