import Image from "next/image";
import React from "react";
import avatar from "../../../public/head5.webp";

const SettingsWrapper = () => {
  return (
    <div className="antialiased bg-neutral-100 h-full w-full relative overflow-x-scroll">
      <div className="responsive-setting-container">
        <div className="border-b w-full py-4">
          <h1 className="text-md font-semibold">Account</h1>
        </div>
        <div className="min-h-32 w-full flex items-center justify-between py-8 ">
          <div className="flex items-center">
            <Image
              className="h-24 w-24 rounded-full border-2 object-fill"
              src={avatar}
              alt="_avatar"
            />
            <span className="font-semibold text-md ml-6">
              Profile Picture <br />{" "}
              <span className="text-gray-500 font-normal">
                PNG, JPEG under 15MB
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="outline-none border rounded-lg py-2 px-4 w-max shadow-sm text-xs bg-gray-50 font-semibold">
              Upload new picture
            </button>
            <button className="outline-none border-none rounded-lg py-2 px-4 w-max shadow-sm text-xs font-semibold bg-slate-200">
              Delete
            </button>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-md font-semibold">Full name</h1>
          <div className="flex w-full pt-8 pb-6 gap-4 border-b">
            <label className="flex flex-col text-sm w-2/4 font-semibold">
              <span className="text-gray-500 pb-1">First name</span>
              <input
                className="border border-slate-200 outline-none px-2 h-9 rounded-lg shadow-sm font-normal "
                type="text"
                value="Mertcan"
              />
            </label>
            <label className="flex flex-col text-sm w-2/4 min-w-80 font-semibold">
              <span className="text-gray-500 pb-1">Last name</span>
              <input
                className="border border-slate-200 outline-none px-2 h-9 rounded-lg shadow-sm font-normal"
                type="text"
                value="Kara"
              />
            </label>
          </div>
        </div>
        <div className="w-full pt-8 border-b">
          <h1 className="text-md font-semibold">Contact email</h1>
          <p className="font-normal text-gray-500 text-sm py-1">
            Manage your accounts email address for the invoices.
          </p>
          <div className="flex items-center justify-between">
            <label className="flex flex-col text-sm w-2/4 min-w-80 font-semibold py-7">
              <span className="text-gray-500 pb-1">Email</span>
              <div className="relative">
                <svg
                  height="18"
                  width="18"
                  style={{
                    color: "#5a5959",
                    display: "inline-block",
                    left: "8px",
                    position: "absolute",
                    top: "9px",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#5a5959"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z"
                      stroke="#5a5959"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M7 9L12 13L17 9"
                      stroke="#5a5959"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
                <input
                  className=" w-full border border-slate-200 outline-none pl-8 h-9 rounded-lg shadow-sm font-normal"
                  type="text"
                  value="admin@diplodev.co.uk"
                />
              </div>
            </label>
            <div className="inline-block pt-5">
              <button className="flex gap-2 outline-none border rounded-lg py-2 px-4 w-max shadow-sm text-xs bg-gray-50 font-semibold">
                <div>
                  <svg
                    data-testid="geist-icon"
                    height="14"
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    width="14"
                    fill="#3b82f6"
                    style={{ color: "#3b82f6" }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z"
                      fill="#3b82f6"
                    ></path>
                  </svg>
                </div>
                Add another email
              </button>
            </div>
          </div>
        </div>
        <div className="w-full pt-8 border-b">
          <h1 className="text-md font-semibold">Password</h1>
          <p className="font-normal text-gray-500 text-sm py-1">
            Modify your current password.
          </p>
          <div className="flex w-full pt-8 pb-6 gap-4">
            <label className="flex flex-col text-sm w-2/4 font-semibold">
              <span className="text-gray-500 pb-1">Current password</span>
              <div className="relative">
                <svg
                  data-testid="geist-icon"
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  style={{
                    color: "#5a5959",
                    display: "inline-block",
                    left: "8px",
                    position: "absolute",
                    top: "9px",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <input
                  className="w-full border border-slate-200 outline-none pl-8 h-9 rounded-lg shadow-sm font-normal "
                  type="password"
                  value="Diplo2024!!"
                />
              </div>
            </label>
            <label className="flex flex-col text-sm w-2/4 min-w-80 font-semibold">
              <span className="text-gray-500 pb-1">New password</span>
              <div className="relative">
                <svg
                  data-testid="geist-icon"
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  style={{
                    color: "#5a5959",
                    display: "inline-block",
                    left: "8px",
                    position: "absolute",
                    top: "9px",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <input
                  className="w-full border border-slate-200 outline-none pl-8 h-9 rounded-lg shadow-sm font-normal "
                  type="password"
                  value="Diplo2024!!"
                />
              </div>
            </label>
          </div>
        </div>
        <div className="w-full py-8 border-b">
          <h1 className="text-md font-semibold">Integrated Accounts</h1>
          <p className="font-normal text-gray-500 text-sm py-1">
            Manage your current integrated accounts.
          </p>
          <div className="w-full border rounded-lg shadow-sm py-3 mt-6 flex items-center">
            <div className="px-2">
              <svg
                viewBox="-14 0 284 284"
                version="1.1"
                width="50"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
                className="bg-slate-100 p-2 rounded-xl cursor-pointer"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M256.003159,247.933017 C256.055907,258.030289 251.77298,267.664804 244.241349,274.390297 C236.709718,281.11579 226.653817,284.285366 216.626905,283.094249 C198.58347,280.424364 185.360959,264.722632 185.800619,246.488035 L185.800619,36.8452103 C185.364944,18.5907614 198.619678,2.88144681 216.687112,0.238996295 C226.704325,-0.933476157 236.743571,2.24455542 244.261279,8.9678962 C251.778988,15.691237 256.053811,25.3147619 256.003159,35.4002282 L256.003159,247.933017 Z"
                      fill="#F9AB00"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M35.1010243,213.193238 C54.4867848,213.193238 70.2020487,228.908502 70.2020487,248.294263 C70.2020487,267.680023 54.4867848,283.395287 35.1010243,283.395287 C15.7152639,283.395287 0,267.680023 0,248.294263 C0,228.908502 15.7152639,213.193238 35.1010243,213.193238 Z M127.459466,106.806429 C107.981896,107.874068 92.8698765,124.212107 93.3217628,143.713681 L93.3217628,237.998765 C93.3217628,263.58699 104.580582,279.120548 121.077461,282.431965 C131.434034,284.530959 142.185473,281.860819 150.356699,275.160414 C158.527925,268.460009 163.252393,258.439904 163.222912,247.872809 L163.222912,142.088076 C163.240039,132.641687 159.462041,123.584285 152.737293,116.950107 C146.012546,110.315928 136.904752,106.661084 127.459466,106.806429 L127.459466,106.806429 Z"
                      fill="#E37400"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="px-4 text-xs text-gray-500 font-semibold w-max">
                <strong className="text-xs text-slate-800 font-bold">
                  Google analytics
                </strong>
                <br />
                Navigate the Google Analytics interface and reports.
              </span>
            </div>
            <div className="w-full flex items-center justify-end pr-4">
              <button className="border-2 border-green-500 rounded-lg text-green-500 text-xs font-semibold py-2 px-2">
                Connected
              </button>
            </div>
          </div>
          <div className="w-full border rounded-lg shadow-sm py-3 mt-6 flex items-center">
            <div className="px-2">
              <svg
                width="50"
                height="40"
                className="bg-slate-100 p-2 rounded-xl cursor-pointer"
                viewBox="-0.5 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      {" "}
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        {" "}
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="px-4 text-xs text-gray-500 font-semibold w-max">
                <strong className="text-xs text-slate-800 font-bold">
                  Google analytics
                </strong>
                <br />
                Navigate the Google Analytics interface and reports.
              </span>
            </div>
            <div className="w-full flex items-center justify-end pr-4">
              <button className="border-2 border-green-500 rounded-lg text-green-500 text-xs font-semibold py-2 px-2">
                Connected
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-8 border-b">
          <h1 className="text-md font-semibold">Account security</h1>
          <p className="font-normal text-gray-500 text-sm py-1">
            Manage your account security.
          </p>
          <div className="flex items-center gap-5 py-4">
            <div className="relative -ml-2">
              <svg
                data-testid="geist-icon"
                height="14"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="14"
                style={{
                  color: "#5a5959",
                  display: "inline-block",
                  left: "12px",
                  position: "absolute",
                  top: "10px",
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 13.5H6.75V15H2C1.44772 15 1 14.5523 1 14V2C1 1.44771 1.44772 1 2 1H6.75V2.5L2.5 2.5L2.5 13.5ZM12.4393 7.24999L10.4697 5.28031L9.93934 4.74998L11 3.68932L11.5303 4.21965L14.6036 7.29288C14.9941 7.6834 14.9941 8.31657 14.6036 8.70709L11.5303 11.7803L11 12.3106L9.93934 11.25L10.4697 10.7197L12.4393 8.74999L5.75 8.74999H5V7.24999H5.75L12.4393 7.24999Z"
                  fill="currentColor"
                ></path>
              </svg>
              <button className="outline-none border rounded-lg py-2 pl-8 pr-4 w-max shadow-sm text-xs bg-gray-50 font-semibold">
                Log out
              </button>
            </div>
            <div className="relative -ml-2">
              <svg
                data-testid="geist-icon"
                height="14"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="14"
                style={{
                  color: "#f43f5e",
                  display: "inline-block",
                  left: "12px",
                  position: "absolute",
                  top: "10px",
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z"
                  fill="#f43f5e"
                ></path>
              </svg>
              <button className="outline-none border text-red-500 rounded-lg py-2 pl-8 pr-4 w-max shadow-sm text-xs bg-gray-50 font-semibold">
                Delete my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsWrapper;
