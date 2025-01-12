"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextArea, Textinput } from "@assets/components/inputs/Textinput";
import { ButtonOne } from "@assets/components/reusables/buttons/Buttons";
import { ContactUs } from "@assets/components/index";

const page = () => {
  const [form, setForm] = useState({
    name: ``,
    email: ``,
    phone: ``,
    message: ``,
  });
  return (
    <div className="min-h-screen w-full pt-20">
      <section className="w-full h-screen flex justify-center items-start">
        <div className="text-center h-[60%] w-full bg-gradient-to-t from-amber-500 to-amber-600 flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-white text-start font-bold">
            Reach Out
          </h1>
        </div>
      </section>
      <section className="h-screen w-full px-5">
        <motion.div
          initial={{ opacity: 0, translateY: 0 }}
          whileInView={{ opacity: 1, translateY: -490 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-2xl flex justify-between flex-col h-full rounded-2xl opacity-30 md:w-[75%] mx-auto"
        >
          <header className="w-full m-4 text-center ">
            <h3 className=" text-white font-bold text-2xl">
              {ContactUs.heading}
            </h3>
            <p className="text-white ">{ContactUs.subHeading}</p>
          </header>
          <div className="w-full flex flex-col gap-y-12 px-5 mb-8 justify-between">
            <Textinput
              label={"Full Name"}
              value={form.name}
              changed={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="border rounded-xl"
              labelStyle="bg-white"
            />
            <Textinput
              label={"Email"}
              value={form.email}
              changed={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="border rounded-xl"
              labelStyle="bg-white"
            />
            <Textinput
              label={"Phone"}
              value={form.phone}
              changed={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className="border rounded-xl"
              labelStyle="bg-white"
            />
            <TextArea
              label={"Full Name"}
              value={form.message}
              changed={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="border rounded-xl"
              labelStyle="bg-white"
            />
            <ButtonOne buttonValue={"Submit"} Clicked={console.log(form)} />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default page;
