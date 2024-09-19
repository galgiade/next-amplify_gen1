import authAndUserData from '@/utils/authAndUserData';
import Contact from '@/app/componets/contact/Contact';
import { ListReservation } from '@/api/queries/list/ListReservationServer';
import ReservationUpdate from '@/app/componets/contact/ReservationUpdate';
import { redirect } from "next/navigation"

export default async function Test11Page() {
  const { authData,userData } = await authAndUserData()
  if (!authData) {
    return redirect(`/login?redirect=${encodeURIComponent('/contact')}`)
  }
  if (!userData) {
    return redirect(`/createuserinfo?redirect=${encodeURIComponent('/contact')}`)
  }
  const reservationArray = await ListReservation()
    return (
      <div className="flex justify-center items-center">
      <div className='w-96'>
        {userData.reservation
          ? <ReservationUpdate userData = {userData} reservationArray={reservationArray} />
          : <Contact reservationArray={reservationArray} userData = {userData} />}
      </div>
      </div>
    );
}