import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { User } from "../../../interfaces/user.interface";

const schema = Yup.object().shape({
  username: Yup.string()
    .required("Enter Username")
    .max(16, "Username cannot be longer than 16 characters"),
  password: Yup.string().required('Without a password, "None shall pass!"'),
  email: Yup.string().email("Please provide a valid email address (abc@xy.z)"),
});

const Auth = () => {
  const { handleSubmit, register, setError } = useForm<User>();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <div className="auth">
      <div className="card">
        <form>
          <div className="inputWrapper">
            <input name="username" placeholder="Username" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
