import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import EmailModel from "@/lib/models/email-model";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export const POST = async (request) => {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
};

export const GET = async (request) => {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
};

export const DELETE = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({
    success: true,
    msg: "Email deleted successfully.",
  });
};
