import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { serviceDBSByTable } from "@/src/graphql/queries";
import { cookies } from "next/headers";
import amplifyConfig from "@/src/amplifyconfiguration.json";
import type { ReservationProps } from "@/api/apiType";

export const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

export async function ListReservation(): Promise<ReservationProps[]> {
  //現在時刻(ISO8601)を取得
  const now = new Date().toISOString();
  try {
    //APIからデータを取得
    const response = await cookieBasedClient.graphql({
      query: serviceDBSByTable,
      variables: {
        table: "reservation",
        filter: {
          reservationStartTime: { ge: now },
        },
      },
      authMode: "userPool",
    });
    console.log(response);
    const reservationArray: ReservationProps[] = [];
    //取得したデータを格納
    //格納形式[{startTime: string,endTime: string},{startTime: string...}]
    if (response.data && response.data.serviceDBSByTable) {
      const reservations = response.data.serviceDBSByTable.items;
      reservations.forEach((reservation) => {
        if (
          reservation &&
          reservation.reservationStartTime &&
          reservation.reservationEndTime
        ) {
          reservationArray.push({
            startTime: reservation.reservationStartTime,
            endTime: reservation.reservationEndTime,
          });
        }
      });
    }
    console.log("予約データ配列:", reservationArray);
    return reservationArray;
  } catch (err) {
    console.error("データの取得中にエラー:", err);
    return [];
  }
}
