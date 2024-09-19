"use client";
import Create from "@/api/mutations/Create";

export default function apitest() {
  const formData = {
    cognitoIdentityID: "87e58239-27da-4c40-90b5-2f6e0a4d7549",
    reservationStartTime: "2024-03-14T01:00:00.000Z",
    reservationEndTime: "2024-03-14T02:00:00.000Z",
    inquiryCategory: "newProjects",
    inquiryDetails: "CreateApiTest",
    table: "reservation",
  };
  const handleCreate = async () => {
    try {
      const data = await Create(formData);
      console.log(data);
    } catch (error) {
      console.error("Error creating reservation:", error);
    }
  }
  return (
    <div>
      <button onClick={handleCreate}>create</button>
    </div>
  );
}
