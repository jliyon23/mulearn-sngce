import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json";

const Team = () => {
    return (
        <div className={styles.teamWrapper} id="team">
            <h1>Our Team</h1>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div>
                <div className={styles.teamMembersDetailsWrapper}>
                    <div className={`${styles.team} ${styles.team1}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.staffAdvisor.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.staffAdvisor.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Staff Advisor
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team2}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team3}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusCoLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Co-Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team4}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.technicalLead1.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.technicalLead1.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Technical Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team5}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.technicalLead2.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.technicalLead2.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Technical Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team6}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.technicalLead3.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.technicalLead3.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Technical Lead
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${styles.team} ${styles.team7}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.creativeLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.creativeLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Creative Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team8}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.creativeCoLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.creativeCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Creative Co-Lead
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div>
                <div className={styles.teamMembersDetailsWrapper}>
                <div className={`${styles.team} ${styles.team9}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.uiuxLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.uiuxLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                UI/UX Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team10}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.webLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.webLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Web Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team11}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.cyberSecurityLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.cyberSecurityLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Cyber Security Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team12}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.mediaLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.mediaLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Media Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team13}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.mediaCoLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.mediaCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Media Co-Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team14}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.contentLead1.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.contentLead1.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Content Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team15}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.contentLead2.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.contentLead2.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Content Lead
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    {/* <img src={line} alt="" loading="lazy" /> */}
                    {/* <img src={line2} alt="" loading="lazy" /> */}
                    <img src={line} alt="" loading="lazy" />
                    {/* <img src={line2} alt="" loading="lazy" /> */}
                </div>
                <div className={styles.teamMembersDetailsWrapper}>


                <div className={`${styles.team} ${styles.team17}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.designLead1.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.designLead1.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team18}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.designLead2.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.designLead2.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team19}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.designLead3.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.designLead3.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design Lead
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Team;