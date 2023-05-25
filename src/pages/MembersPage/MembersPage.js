import React from "react";
import "./MembersPage.scss"
import MembersCardList from "../../components/MembersCardList/MembersCardList";
function MembersPage() {
    return (
        <main className="members">
            <MembersCardList />
        </main>
    );
}

export default MembersPage;