"use client";

import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import Reactions from "./Reaction";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

type Props = {
  imageData: any;
  isOpen: boolean;
  closeModal: () => void;
  prevImage: () => void;
  nextImage: () => void;
  limit: number;
  idx: number;
};

export default function MyDialog({
  imageData,
  isOpen,
  closeModal,
  prevImage,
  nextImage,
  limit,
  idx,
}: Props) {
  const [like, setLike] = useState(imageData.likes);
  const [imageDimensions, setImageDimensions] = useState({});

  return (
    console.log(imageData),
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeModal}
          __demoMode
        >
          <div className="fixed inset-0 z-50 w-screen bg-[#000]/80 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 relative">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full relative max-w-2xl mx-auto lg:max-w-5xl xl:max-w-7xl rounded-xl flex flex-col bg-[#fff] justify-center items-center p-6 backdrop-blur-xl mt-10">
                  <div className="fixed -top-8 -left-16 xl:-top-10 xl:-left-20">
                    <svg
                      onClick={closeModal}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#fff"
                      className="size-6 hover:cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="relative flex items-center">
                    <button>
                      <svg
                        onClick={() => {
                          idx > 0 ? prevImage() : null;
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.3}
                        stroke={`${idx > 0 ? "#fff" : "#e5e5e5"}`}
                        className={`
                        fixed top-[24rem] -left-20
                        ${
                          idx > 0
                            ? "hover:cursor-pointer"
                            : "hover:cursor-not-allowed"
                        } size-8 mr-4 z-50`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>

                    {/** */}
                    <div className="flex flex-col items-center">
                      <div className="text-base/7 font-medium text-white h-full overflow-hidden mb-8">
                        <div className={`min-h-[300px] p-4 select-none`}>
                          <img
                            src={imageData.url}
                            alt="photo"
                            className="max-h-[75vh] max-w-auto"
                          />
                        </div>
                      </div>

                      <div className="w-full pt-4 flex">
                        <div className="w-2/3 flex flex-col">
                          <div>
                            <p
                              className={`text-4xl lg:text-5xl xl:text-6xl text-left ${greatVibes.className}`}
                            >
                              {imageData.name}
                            </p>
                          </div>
                          <div className="w-full">
                            <p className="text-gray-800 text-sm">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Officia inventore cum ipsum,
                              eligendi libero temporibus impedit quo facere,
                              omnis, nihil excepturi cupiditate labore adipisci
                              qui? Adipisci enim est in sequi?
                            </p>
                          </div>

                          <div className="pt-8">
                            <div className="font-semibold">
                              <span className="text-black uppercase text-base">
                                Persone presenti:
                              </span>
                              <div className="flex gap-2 flex-wrap text-base font-medium">
                                {imageData.people.map((person, index) => (
                                  <>
                                  <span
                                    key={index}
                                    className="text-[#81B4AF]"
                                  >
                                    {person.name}
                                  </span>
                                  </>
                                ))}

                              </div>
                            </div>
                          </div>

                          <div className="pt-8">
                            <div className="flex flex-wrap gap-2">
                              {imageData.tags.map((tag, index) => (
                                <button
                                  key={index}
                                  className="rounded-[4px] bg-[#d5d5d5] text-[#646464] p-2"
                                >
                                  {tag.name}
                                </button>
                              ))}
                              {/* <button className="rounded-[4px] bg-[#d5d5d5] text-[#646464] p-2">
                                Parola chiave
                              </button>
                              <button className="rounded-[4px] bg-[#d4d4d4] text-[#606060] p-2">
                                Parola chiave
                              </button>
                              <button className="rounded-[4px] bg-[#d4d4d4] text-[#606060] p-2">
                                Parola chiave
                              </button> */}
                            </div>
                          </div>
                        </div>

                        <div className="w-1/3 pt-8">
                          <div className="flex flex-col justify-end items-end">
                            <Reactions photoId={imageData.id} />
                            {/*
                            <div className="flex gap-x-2 mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                              </svg>
                            </div>
                            */}

                            <div className="flex flex-col md:flex-row md:gap-x-2 items-end md:items-center">
                              <h5 className="text-sm">
                                Apprezzamenti: <strong>{like}</strong>
                              </h5>
                              <h5 className="text-sm">
                                Visualizzazioni: <strong>{like}</strong>
                              </h5>
                            </div>

                            <div className="flex flex-col gap-4 w-full items-end pt-4">
                              <div className="flex items-center gap-x-2">
                                <span className="text-sm">
                                  Cairano (AV) Italia{" "}
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                  />
                                </svg>
                              </div>
                              <div className="flex items-center gap-x-2">
                                <span className="text-sm">Anni 70</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/** */}

                    <button>
                      <svg
                        onClick={() => {
                          idx < limit - 1 ? nextImage() : closeModal();
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.3}
                        stroke={`${idx < limit - 1 ? "#fff" : "#e5e5e5"}`}
                        className={`
                        fixed top-[24rem] -right-20 size-8 ml-4 z-50 hover:cursor-pointer`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="w-full py-24">
                    <div className="max-w-4xl mx-auto pb-4">
                      <h3 className="ext-black text-lg font-semibold">Foto collegate:</h3>
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-2 gap-2 justify-center ">
                      <div className="w-full h-80 bg-[#bcbcbc]"></div>
                      <div className="w-full h-80 bg-[#bcbcbc]"></div>
                      <div className="w-full h-80 bg-[#bcbcbc]"></div>
                      <div className="w-full h-80 bg-[#bcbcbc]"></div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
