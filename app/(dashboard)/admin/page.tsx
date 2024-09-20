"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo-transparent-light.png";

import {
  AdminHamburg,
  DarkIcon,
  DashMenu,
  NotifyIcon,
  ProfileIcon,
} from "@/app/components/ui/Icons";

import { signOut } from "next-auth/react";
import useSession from "../../hooks/useSession";
import useTimeout from "../../hooks/useTimeout";
import Loading from "../../components/ui/Loading";
import Link from "next/link";
import AdminSidebar from "@/app/components/ui/AdminSidebar";
import TableWrapper from "@/app/components/ui/TableWrapper";
import useNavigate from "@/app/hooks/useNavigate";
import CalendarWrapper from "@/app/components/ui/CalendarWrapper";
import SettingsWrapper from "@/app/components/ui/SettingsWrapper";

const Dashboard = () => <div>Dashboard Content</div>;
const Users = () => <TableWrapper />;
const Calendar = () => <CalendarWrapper />;
const Settings = () => <SettingsWrapper />


const AdminDashboard = () => {
  const { page, navigate } = useNavigate();
  const { session, loading, error } = useSession(); // custom hook
  const [openSidebar, setOpenSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);

  const isTimeoutReady = useTimeout(1000);

  useEffect(() => {
    if (!loading && isTimeoutReady) {
      setShowLoading(false);
    }
  }, [loading, isTimeoutReady]);

  useEffect(() => {
    if (signingOut) {
      setShowLoading(true);
    }
  }, [signingOut]);

  if (showLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    ); // Show loading message while waiting for timeout and session fetch
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <strong>Error:</strong> <p>{error}</p>
      </div>
    ); // Show error message if fetching session fails
  }

  if (!session?.user) {
    return (
      <div className="flex py-36 justify-center h-screen text-lg">
        <strong className="text-slate-800">Error:</strong>{" "}
        <p className="pl-1">You should sign in to see this page!</p>
      </div>
    ); // Show error message if the user is not signed in
  }


  const renderContent = () => {
    switch (page) {
      case "Dashboard":
        return <Dashboard />;
      case "Users":
        return <Users />;
      case "Databases":
        return <div>Databases Content</div>;
      case "Components":
        return <div>Components Content</div>;
      case "Analytics":
        return <div>Analytics Content</div>;
      case "SEO":
        return <div>SEO Content</div>;
      case "Sales":
        return <div>Sales Content</div>;
      case "Tasks":
        return <div>Tasks Content</div>;
      case "Calendar":
        return <Calendar/>;
      case "Help":
        return <div>Help Content</div>;
      case "Settings":
        return <Settings/>;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div className="w-full h-screen relative bg-gray-100">
      <div className="w-full py-1 flex items-center justify-between px-4 bg-neutral-50 border-b border-neutral-300">
        <div className="flex items-center gap-4 ">
          <AdminHamburg isOpen={() => setOpenSidebar(!openSidebar)} />
          <Link href="/">
            <Image priority className="w-32" src={logo} alt="dash-logo" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <NotifyIcon />
          <DashMenu />
          <DarkIcon />
          <ProfileIcon setOpen={() => setDropdown(!dropdown)} />
        </div>
        {dropdown && (
          <div className="absolute right-0 bg-neutral-50 rounded-md shadow-sm border border-gray-100 text-sm top-14 z-10">
            <ul className="py-4 text-neutral-600">
              <li className="border-b border-neutral-300 pb-2 px-5">
                {session?.user?.username ?? "No username"} <br />
                <strong className="font-medium">
                  {session?.user?.email ?? "No email"}
                </strong>
              </li>
              <li className="cursor-pointer py-3 px-5 hover:bg-gray-100">
                Dashboard
              </li>
              <li className="cursor-pointer py-3 px-5 hover:bg-gray-100">
                Settings
              </li>
              <li
                onClick={() => {
                  setSigningOut(true);
                  signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/api/auth/signin`,
                  });
                }}
                className="cursor-pointer py-3 px-5 hover:bg-gray-100"
              >
                Sign out
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full h-full flex">
        <AdminSidebar openSidebar={openSidebar} navigate={navigate}/>
        <div className={`${!openSidebar ? "content-closed" : "content-open"}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
