import "./ProfileHeader.css";

function ProfileHeader() {
    const profilePhoto = "https://yt3.ggpht.com/ytc/AKedOLQKnQTfUZYWrw_e95Xs-_kpz0CztA8o-9XHiTMpVw=s900-c-k-c0x00ffffff-no-rj";
    return (
        <section className="mt-8">
            <p>Profile</p>
            <div className="flex justify-between items-center mt-5">
                <img src={profilePhoto} alt="profile" className="w-32 h-32 object-cover rounded-full mr-10" />
                <h1 className="text-5xl profile-header">Billie Eilish Pirate Baird O'Connell</h1>
            </div>
            <hr className="mt-8"></hr>
        </section>
    )
}

export default ProfileHeader