// api.ts
export const logData = async (data: string) => {
  // 通常はサーバーとの通信などの非同期処理が行われるが、今回は console.log のみ行う
  console.log("Received data from the component:", data);
  return data;
};

