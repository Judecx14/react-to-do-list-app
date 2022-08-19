import Navbar from "../Navbar/Navbar";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileData from "./ProfileData/ProfileData";

function Profile() {
    return (
        <section className="px-10 lg:px-52 pt-8">
            <Navbar />
            <ProfileHeader />
            <ProfileData />
        </section>
    );
}

export default Profile;