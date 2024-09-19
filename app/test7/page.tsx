"use client";
import Delete from "@/api/mutations/Delete";
import { useState } from "react";


export default function Page7() {
  const [deleteId, setDeleteId] = useState("");
  const handleDelete = async () => {
    await Delete(deleteId[0]);
  };
  return (
    <div>
      <input
        type="text"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
        className="input input-bordered w-full max-w-xs text-lg rounded-lg"
        placeholder="削除するIDを入力"
      />
      <button onClick={handleDelete} className="btn btn-error">
        削除
      </button>
    </div>
  );
}