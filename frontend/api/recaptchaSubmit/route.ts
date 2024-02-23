'user server';
import { NextResponse } from "next/server";
import axios from "axios";

export async function postRequest(request: Request, response: Response) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const postData = await request.json();

    const { gRecaptchaResponse } = postData;

    let res;

    const formData = `secret=${secretKey}&response=${gRecaptchaResponse}`;

    try {
        res = await axios.post('https://www.google.com/recaptcha/api/siteverify', 
        formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }catch(e) {
        return NextResponse.json({ uccess: false })
    }

    if (res && res.data?.success && res.data?.score > 0.5) {
        return NextResponse.json({ 
            success: true,
            message: 'Recaptcha verification success',
            score: res.data.score});
    } else{
        return NextResponse.json({ success:false });
    }
}