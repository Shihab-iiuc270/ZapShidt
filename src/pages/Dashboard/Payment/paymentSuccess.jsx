import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
    const [searchParam] = useSearchParams()
    const [paymentInfo,setPaymentInfo] = useState({})
    const sessionId = searchParam.get('session_id');
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
        if(sessionId){
             axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
             .then(res=>{
                console.log(res.data)
                setPaymentInfo({
                    transactionId : res.data.transactionId,

                    trackingId : res.data.trackingId
                })
             })
        }

    },[sessionId,axiosSecure])
    return (
        <div>
        <h2 className='text-4xl text-center font-bold text-secondary'>Payment Succeed</h2>
       <p>Your TransactionId : {paymentInfo.transactionId}</p>
       <p>Your TrackingId : {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;