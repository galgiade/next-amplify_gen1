"use server"
import authAndUserData from "@/utils/authAndUserData";
import AccountFrom from "./AccountFrom";
import { ListReservation } from "@/api/queries/list/ListReservationServer";

export default async function Test6() {
  const { userData } = await authAndUserData()
  const { reservationArray } = await ListReservation()
  return (
    <div>
      {userData && JSON.stringify(userData, null, 2)}
      <AccountFrom
        userData={userData}
      />
    </div>
  );
}
