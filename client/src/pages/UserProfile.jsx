
import React, { useEffect, useState } from 'react'
import { GiPlagueDoctorProfile } from "react-icons/gi";


const UserProfile = () => {

  const [user, setUser] = useState({})

  const fetchUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/me", {
        credentials: "include"
      })

      const data = await res.json()
      console.log(data)

      setUser(data.user)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  // Account details
  const details = [
    { label: "FULL NAME", value: user.name },
    { label: "EMAIL ADDRESS", value: user.email, verified: true },
    { label: "PHONE NUMBER", value: user.phone },
    { label: "ROLE / MEMBERSHIP", value: user.role }
  ]

  return (
    <div className="min-h-screen bg-[rgb(255,248,220)] px-5 py-10">

      {/* Profile Card */}
      <div className="max-w-2xl  mx-auto bg-white border-2 border-black rounded-xl p-5 shadow-[4px_4px_0px_#000]">

        {/* User Header */}
        <div className="flex items-center gap-4 pb-5 border-b border-gray-200">

          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-[#f5e8c9] flex items-center justify-center text-3xl overflow-hidden">

              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <GiPlagueDoctorProfile/>
              )}

            </div>
          </div>

          {/* User Info */}
          <div>
            <h2 className=" text-2xl text-gray-900">
              {user.name || "Loading..."}
            </h2>

            <p className="text-lg text-gray-500">
              {user.email}
            </p>

            <p className="text-[15px] text-gray-600 mt-2">
              ▣ {user.role === "user" ? "Member" : user.role}
            </p>
          </div>

        </div>

        {/* Account Details */}
        <div className="pt-5">

          <h3 className="font-bold text-xl mb-3">
            Account Details
          </h3>

          <div className="grid grid-cols-2 ">

            {details.map((detail, index) => (
              <div
                key={index}
                className="min-w-0 bg-[#f5f4f2] border border-black rounded-md p-2 m-[2px]"
              >

                <p className="text-[12px]  text-gray-500">
                  {detail.label}
                </p>

                <div className="flex items-center justify-between gap-1">

                  <p className="text-[14px] font-medium truncate">
                    {detail.value || "Not provided"}
                  </p>

                  {detail.verified && (
                    <span className="text-[12px] text-blue-600 shrink-0">
                      ✓
                    </span>
                  )}

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Border */}
        <div className="mt-5 border-t border-gray-200 pt-4">
        </div>

      </div>
    </div>
  )
}

export default UserProfile
