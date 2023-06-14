import React from "react";
import "./MemberInfo.scss";

const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
}

const formatGroupPosition = (groupPosition) => {
    return groupPosition.join(', ');
}
function MemberInfo({ member }) {
    if (!member) {
        return (
            <div className="member">Select a member to  see information about him</div>
        )
    }

    const formattedBirthday = formatDate(member.birthDate);
    const formattedGroupPosition = formatGroupPosition(member.groupPosition);

    return (
        <section className="member">
            <img src={member.personalPhoto} alt={member.name} className="member__photo"/>
            <div className="member-info">
                <div className="member-info__row">
                    <p className="member-info__title">Birth name</p>
                    <p className="member-info__description">{member.birthName}</p>
                </div>
                <div className="member-info__row">
                    <p className="member-info__title">Stage Name</p>
                    <p className="member-info__description">{member.stageName}</p>
                </div>
                <div className="member-info__row">
                    <p className="member-info__title">Birthday</p>
                    <p className="member-info__description">{formattedBirthday}</p>
                </div>
                <div className="member-info__row">
                    <p className="member-info__title">Zodiac Sign</p>
                    <p className="member-info__description">{member.zodiac}</p>
                </div>
                <div className="member-info__row">
                    <p className="member-info__title">Height</p>
                    <p className="member-info__description">{member.height}</p>
                </div>
                <div className="member-info__row">
                    <p className="member-info__title">Group position</p>
                    <p className="member-info__description">{formattedGroupPosition}</p>
                </div>
                <div className="member-info__row">
                    <p className="member-info__title">SKZOO</p>
                    <p className="member-info__description">{member.skzoo}</p>
                </div>
            </div>
        </section>
    );
}

export default MemberInfo;