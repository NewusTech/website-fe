"use client";

import { sendMessage } from "@/app/api";
import React, { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { handleOnlyNumbers } from "@/lib/utils";

const TabOne = () => {
  const [modalActionSend, setModalActionSend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({
    status: true,
    message: "Berhasil Mengirim Formulir",
  });

  const [dataMessage, setDataMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    sub_message: "",
    message: "",
    phoneNumber: "",
  });

  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    if (
      dataMessage.email === "" ||
      dataMessage.message === "" ||
      dataMessage.firstName === "" ||
      dataMessage.sub_message === ""
    )
      return;

    // Payload

    const payload = {
      name: dataMessage.firstName,
      lastname: dataMessage.lastName,
      email: dataMessage.email,
      message: dataMessage.message,
      subject: dataMessage.sub_message,
      phoneNumber: dataMessage.phoneNumber,
    };

    // Action
    try {
      const response = await sendMessage(payload);
      console.log(response);
      setDataMessage({
        firstName: "",
        lastName: "",
        email: "",
        sub_message: "",
        message: "",
        phoneNumber: "",
      });
      setStatus({ status: true, message: "Berhasil Mengirim Formulir" });
    } catch (error: any) {
      console.error(error);
      setStatus({ status: false, message: error.message.toString() });
    }
    setModalActionSend(true);
  };

  return (
    <section className="pt-4 md:pt-5">
      <form onSubmit={handleSendMessage} className="flex flex-col gap-6">
        <div className="md:flex w-full gap-4 ">
          <div className="flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0">
            <label
              htmlFor="firstName"
              className="text-mobileSubjudul md:text-webSubjudul font-[500]"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="border border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[11px] bg-[#F4F4F4]"
              placeholder="Input here"
              value={dataMessage.firstName}
              onChange={(value) =>
                setDataMessage({
                  ...dataMessage,
                  firstName: value.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2 md:w-1/2  ">
            <label
              htmlFor="lastName"
              className="text-mobileSubjudul md:text-webSubjudul font-[500]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="border border-[#DDE5E9] rounded-lg text-mobileSubjudul md:text-webSubjudul px-4 py-[11px] bg-[#F4F4F4]"
              placeholder="Input here"
              value={dataMessage.lastName}
              onChange={(value) =>
                setDataMessage({
                  ...dataMessage,
                  lastName: value.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="md:flex w-full gap-4">
          <div className="flex flex-col gap-2 md:w-1/2 pb-4 md:pb-0">
            <label
              htmlFor="email"
              className="text-mobileSubjudul md:text-webSubjudul font-[500]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border border-[#DDE5E9] rounded-lg text-mobileSubjudul md:text-webSubjudul px-4 py-[11px] bg-[#F4F4F4]"
              placeholder="Input here"
              value={dataMessage.email}
              onChange={(value) =>
                setDataMessage({
                  ...dataMessage,
                  email: value.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2 md:w-1/2 md:pb-0">
            <label
              htmlFor="phoneNumber"
              className="text-mobileSubjudul md:text-webSubjudul font-[500] "
            >
              Phone Number
            </label>
            <input
              type="text"
              inputMode="tel"
              name="phoneNumber"
              maxLength={13}
              className="border border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[11px] bg-[#F4F4F4]"
              placeholder="+62"
              value={dataMessage.phoneNumber}
              onChange={(value) =>
                setDataMessage({
                  ...dataMessage,
                  phoneNumber: handleOnlyNumbers(value.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="subjectMessage"
            className="text-mobileSubjudul md:text-webSubjudul  font-[500]"
          >
            Subject Message
          </label>
          <input
            type="text"
            name="subjectMessage"
            className="border border-[#DDE5E9] text-mobileSubjudul md:text-webSubjudul rounded-lg px-4 py-[11px] bg-[#F4F4F4]"
            placeholder="Input here"
            value={dataMessage.sub_message}
            onChange={(value) =>
              setDataMessage({
                ...dataMessage,
                sub_message: value.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="message"
            className="text-mobileSubjudul md:text-webSubjudul font-[500]"
          >
            Message
          </label>
          <textarea
            name="message"
            className="border border-[#DDE5E9] rounded-lg px-4 py-[11px] bg-[#F4F4F4] text-mobileSubjudul md:text-webSubjudul"
            placeholder="Input here"
            value={dataMessage.message}
            onChange={(value) =>
              setDataMessage({
                ...dataMessage,
                message: value.target.value,
              })
            }
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="text-mobileSubjudul md:text-webSubjudul font-[500] bg-[#480DEC] text-white md:py-4 md:rounded-xl rounded-2xl inline-flex w-[180px] md:w-full justify-center px-8 py-[10px] "
          >
            Send Message
          </button>
        </div>
      </form>
      <Dialog open={modalActionSend} onOpenChange={setModalActionSend}>
        <DialogContent className="w-[50%] max-h-[70%]">
          <p className="text-2xl text-center w-full">{status.message}</p>
          <Button
            className="mt-4 bg-blue hover:bg-blue-2 rounded-[10px] py-2 px-12"
            onClick={() => setModalActionSend(false)}
          >
            Oke
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TabOne;
