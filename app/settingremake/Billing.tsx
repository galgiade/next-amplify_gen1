import { UserDataType } from '@/api/apiType';
import React from 'react'

interface BillingProps {
    userData: UserDataType;
  }

const Billing = ({
    userData
  }:BillingProps) => {
  return (
    <div>Billing</div>
  )
}

export default Billing