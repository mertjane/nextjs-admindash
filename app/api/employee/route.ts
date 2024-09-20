import { NextRequest, NextResponse } from "next/server";
import db from "../../lib/db";
import { hash } from "bcryptjs";
import { employeeSchema } from "@/app/types/formTypes";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received data:", body);
    const { username, email, password } = employeeSchema.parse(body);

    // check email already exists
    const isEmailExist = await db.employee.findUnique({
      where: { email: email },
    });
    if (isEmailExist) {
      return NextResponse.json(
        {
          user: null,
          message: "Email alraedy exists!",
        },
        { status: 400 }
      );
    }

    // check username already exists
    const isUsernameExist = await db.employee.findUnique({
      where: { username: username },
    });
    if (isUsernameExist) {
      return NextResponse.json({
        user: null,
        message: "Username alraedy exists!",
      });
    }

    const hashedPwd = await hash(password, 10);
    const newUser = await db.employee.create({
      data: {
        username,
        email,
        password: hashedPwd,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const employees = await db.employee.findMany();
    return NextResponse.json(employees, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
