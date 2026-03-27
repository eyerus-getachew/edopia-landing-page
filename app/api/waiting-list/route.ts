import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const dataPath = path.join(process.cwd(), "data", "waitingList.json");
    if (!fs.existsSync(dataPath)) {
      fs.mkdirSync(path.join(process.cwd(), "data"), { recursive: true });
      fs.writeFileSync(dataPath, "[]");
    }

    const fileContent = fs.readFileSync(dataPath, "utf-8");
    const list = JSON.parse(fileContent) as { id: string, email: string, createdAt: string }[];

    const existing = list.find(entry => entry.email === email);
    if (existing) {
      return NextResponse.json({ error: "Email is already on the waiting list" }, { status: 400 });
    }

    list.push({
      id: Math.random().toString(36).substr(2, 9),
      email,
      createdAt: new Date().toISOString()
    });

    fs.writeFileSync(dataPath, JSON.stringify(list, null, 2));

    return NextResponse.json({ message: "You've been added to the waiting list successfully." }, { status: 201 });
  } catch (error: any) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json({ error: error?.message || "Internal server error." }, { status: 500 });
  }
}
