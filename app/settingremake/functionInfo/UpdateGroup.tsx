import { UserDataProps } from '@/api/apiType'
import React from 'react'

const UpdateGroup = ({
  userData,
  setViewMode
}: UserDataProps & { setViewMode: (mode: string) => void }) => {
  return (
    <div>
      CreateGroup
      <button className="font-bold py-2 px-4 rounded" onClick={() => setViewMode('view')}>
          戻る
      </button>
    </div>
  )
}

export default UpdateGroup