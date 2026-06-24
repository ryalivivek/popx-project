import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    navigate("/account");
  };

  return (
    <div className="page">
      <h1>
        Signin to your
        <br />
        PopX account
      </h1>

      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <div className="input-group">
         <label>Email Address</label>
            <input
            type="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={(e) =>
            setForm({
            ...form,
            email: e.target.value,
            })
            }
            />
        </div>

        <div className="input-group">
            <label>Password</label>
                <input
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={(e) =>
                setForm({
                ...form,
                password: e.target.value,
                })
                }
                />
        </div>
        <button
            className="login-btn"
            onClick={() => navigate("/account")}
            >
            Login
        </button>
    </div>
  );
}

export default Login;