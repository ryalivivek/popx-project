import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/account");
  };

  return (
    <div className="page">
      <h1>
        Create your
        <br />
        PopX account
      </h1>
      <div className="input-group">
    <label>Full Name <span>*</span></label>
    <input
      type="text"
      placeholder="Enter full name"
      onChange={(e) =>
        setForm({ ...form, fullName: e.target.value })
      }
    />
  </div>

  <div className="input-group">
    <label>Phone Number <span>*</span></label>
    <input
      type="text"
      placeholder="Enter phone number"
      onChange={(e) =>
        setForm({ ...form, phone: e.target.value })
      }
    />
  </div>

  <div className="input-group">
    <label>Email Address <span>*</span></label>
    <input
      type="email"
      placeholder="Enter email address"
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
    />
  </div>

  <div className="input-group">
    <label>Password <span>*</span></label>
    <input
      type="password"
      placeholder="Enter password"
      onChange={(e) =>
        setForm({ ...form, password: e.target.value })
      }
    />
  </div>

  <div className="input-group">
    <label>Company Name</label>
    <input
      type="text"
      placeholder="Enter company name"
      onChange={(e) =>
        setForm({ ...form, company: e.target.value })
      }
    />
  </div>
  <div className="radio-group">
  <p>Are you an Agency? <span>*</span></p>

  <label>
    <input
      type="radio"
      name="agency"
      checked={form.agency === "yes"}
      onChange={() =>
        setForm({ ...form, agency: "yes" })
      }
    />
    Yes
  </label>

  <label>
    <input
      type="radio"
      name="agency"
      checked={form.agency === "no"}
      onChange={() =>
        setForm({ ...form, agency: "no" })
      }
    />
    No
  </label>
</div>

  <button
    className="login-btn"
    onClick={handleSubmit}
  >
    Create Account
  </button>
    </div>
  );
}

export default Register;