"use client";

import { userSchema, mappedPlans } from "@/validations/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Inputs = {
  name: String;
  email: String;
  password: String;
  confirmPassword: String;
  weight: String;
  plan: String;
};

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const plansOptions = Object.entries(mappedPlans).map(([key, value]) => (
    <option value={key} key={key}>
      {value}
    </option>
  ));
  console.log(errors);
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
          {errors.name?.message && (
            <p className="text-error font-bold">{errors.name?.message}</p>
          )}
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
          {errors.email?.message && (
            <p className="text-error font-bold">{errors.email?.message}</p>
          )}
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
          {errors.password?.message && (
            <p className="text-error font-bold">{errors.password?.message}</p>
          )}
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
          {errors.confirmPassword?.message && (
            <p className="text-error font-bold">
              {errors.confirmPassword?.message}
            </p>
          )}
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
          {errors.weight?.message && (
            <p className="text-error font-bold">{errors.weight?.message}</p>
          )}
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
            {plansOptions}
          </select>
          {errors.plan?.message && (
            <p className="text-error font-bold">{errors.plan?.message}</p>
          )}
        </label>
        <button className="btn btn-primary w-full mt-2" type="submit">
          Submit
        </button>
        <div className="grid gap-2">{JSON.stringify(watch(), null, 2)}</div>
      </form>
    </div>
  );
}

export default Home;
