import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
        name:data.name,
        email:data.email,
        message:data.message,
    }
    try{
        await axios.post('https://getform.io/f/bvrrzvxb', userInfo);
        toast.success('your Message has been sent!, Thanks for Contacting Me ')
    }
    catch (error){
        console.log(error);
        toast.error("Something went Wrong!")
    }
  };

  console.log(watch("example"));
  return (
    <>
      <div name='Contact' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 md:my-16">
        <h1 className="text-3xl font-bold mb-4 md:mb-5">Contact Me</h1>
        <span>Please Fill out the form below to contact me!</span>

        <div className="flex flex-col justify-center  items-center mt-5">
          <form className="md:w-96 bg-green-200 shadow-lg
           px-8 py-6 rounded-xl border"  onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bvrrzvxb" method="POST"
            >
            <h1 className="text-xl font-semibold mb-4 ">Send your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">
                Full Name
                </label>
              <input placeholder="Enter Your Full Name" name="name"
               id="name" className="rounded-lg p-2 shadow border py-2 text-gray-700 "
                type="text" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">
                Email Address
                </label>
              <input placeholder="Enter Your Email Address" name="email"
               id="email" className="rounded-lg p-2 shadow border py-2 text-gray-700 "
                type="text" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">
                Message
                </label>
              <textarea placeholder="Enter Your Query" name="message"
               id="message" className="rounded-lg p-2 shadow border py-2 text-gray-700 "
                type="text" {...register("message", { required: true })} />
                {errors.message && <span>This field is required</span>}
            </div>
            <button type="submit" className="bg-green-800 text-white rounded-xl
            hover:bg-green-600 hover:scale-90 duration-200 px-3 py-2">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
