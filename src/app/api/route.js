import { sendMail } from "../../../services/mailService";
import { NextResponse } from "next/server";

export async function POST(req) {
  let body = await req.json();

  await sendMail(
    body.subject,
    "luthfi.irfan11@gmail.com",
    `Got email from ${body.email} as ${body.name} \nMessage: ${body.message}`
  )
    .then((res) => {
      console.log("proses selesai");
      return NextResponse.json({ status: "res" });
    })
    .catch((err) => {
      return NextResponse.json({ status: "fail", msg: err });
    });
}
