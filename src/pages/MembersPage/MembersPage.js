import React, {useEffect, useState} from "react";
import "./MembersPage.scss"
import MembersCardList from "../../components/MembersCardList/MembersCardList";
import MemberInfo from "../../components/MemberInfo/MemberInfo";
import {getMembers} from "../../utils/MembersApi";
import Preloader from "../../components/Preloader/Preloader";

function MembersPage() {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getMembers()
            .then((data) => {
                setMembers(data);
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
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
            { isLoading && <Preloader/> }
        </main>
    );
}

export default MembersPage;