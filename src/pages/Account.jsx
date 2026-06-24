import { FaCamera } from "react-icons/fa";
function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="account-page">
      <div className="header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-card">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
            />
            <div className="camera-icon">
                <FaCamera size={12} />
            </div>
          </div>

          <div className="profile-info">
            <h3>{user?.fullName || "Marry Doe"}</h3>
            <p>{user?.email || "Marry@Gmail.Com"}</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="divider"></div>
    </div>
  );
}

export default Account;