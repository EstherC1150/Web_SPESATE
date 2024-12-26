import colors from "@/app/_constants/colors";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      questionType,
      companyName,
      managerName,
      phoneNumber,
      email,
      content,
    } = await req.json();

    if (
      !questionType ||
      !companyName ||
      !managerName ||
      !phoneNumber ||
      !email ||
      !content
    ) {
      return NextResponse.json(
        { message: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 이메일 전송
    await transporter.sendMail({
      from: `SPEATE 문의 도우미 <${process.env.SMTP_USER}>`,
      to: "spesate@naver.com",
      subject: `문의: ${questionType}`,
      html: `
     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
      <div style="background-color: ${colors.primary.main}; color: #fff; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
        <h1 style="margin: 0; font-size: 24px;">${companyName}</h1>
      </div>
      <div style="padding: 20px;">
        <p>${content}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
          <tbody>
            <tr>
              <td style="padding: 10px; background-color: #f8f8f8; border: 1px solid #e0e0e0;">담당자</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${managerName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8f8f8; border: 1px solid #e0e0e0;">연락처</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${phoneNumber}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8f8f8; border: 1px solid #e0e0e0;">이메일</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer style="background-color: #f8f8f8; padding: 10px; text-align: center; font-size: 12px; color: #666; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
        <p>본 메일은 발신 전용 메일입니다.</p>
        <p>ⓒ spesate. All rights reserved.</p>
      </footer>
    </div>
  `,
    });

    return NextResponse.json(
      { message: "문의가 성공적으로 전송되었습니다!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("메일 전송 실패:", error);
    return NextResponse.json(
      { message: "메일 전송에 실패했습니다." },
      { status: 500 }
    );
  }
}
