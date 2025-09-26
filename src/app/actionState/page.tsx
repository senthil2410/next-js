"use client";

import formsubmission from "@/lib/formsubmission";
import { useActionState } from "react";

interface FormState {
  success: boolean;
  errors: {
    name?: string;
    email?: string;
  };
  message: string;
}

 const LoginForm = () => {
  const initialState: FormState = {
    success: false,
    errors: {},
    message: "",
  };

  const [state, formAction, isPending] = useActionState(
    formsubmission,
    initialState
  );

  return (
    <form action={formAction}>
      <div>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          disabled={isPending}
        />
        {state.errors.name && (
          <div style={{ color: "red" }}>{state.errors.name}</div>
        )}
      </div>

      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter the eamil"
          disabled={isPending}
        />
        {state.errors.email && (
          <div style={{ color: "red" }}>{state.errors.email}</div>
        )}
      </div>

      <button type="submit" disabled={isPending}>{isPending?"Submitting":"submit"}</button>

      {state.message?state.message:"No messages"}
    </form>
  );
};

export default LoginForm;
