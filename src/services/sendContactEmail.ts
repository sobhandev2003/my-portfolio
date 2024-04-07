import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";


export interface mailOptionType {
    mailSendFrom: string;
    mailSendTo: string;
    phoneNumber?:string;
    mailSubject: string;
    mailText: string;
    html?: string;
}
export const sendEmail=async(mailOption:mailOptionType)=>{
        try {
            // console.log(mailOption);
            const response=await axios.post(
                import.meta.env.VITE_EMAIL_SERVICE_URL,
                mailOption)

                if(response.data.success){
                    toast.success("Email sent successfully.");
                    return response.data.success
                }

        } catch (error) {
            if(isAxiosError(error)){
                toast.error(error.message)
                
            }
            else{
                toast.error("Email server not response")
            }
        }
}