"use client";

import { useForm } from "react-hook-form";

function Home() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex h-[calc(100vh-2rem)] justify-center items-center">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="grid gap-2"
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            {...register("password")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Confirm Password</span>
          </div>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-xs"
            {...register("confirmPassword")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Weight</span>
          </div>
          <input
            type="number"
            id="weight"
            placeholder="Weight"
            className="input input-bordered w-full max-w-xs"
            {...register("weight")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Plan</span>
          </div>
          <select
            id="plan"
            className="input input-bordered w-full max-w-xs"
            {...register("plan")}
          >
            <option value="free">Free</option>
            <option value="basic">Basic</option>
            <option value="midium">Midium</option>
            <option value="premium">Premium</option>
          </select>
        </label>
        <button className="btn btn-primary w-full mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
