import { connect } from "net";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({title,description});
  return NextResponse.json({message:"Topic Created"},{status:201});
}
export async function GET(){
    await connectMongoDB();
    const topics = await Topic.findOne({title:"HTML"});
    return NextResponse.json({topics});
}

export async function DELETE(){
    const title = request.nextUrl.searchParams.get("title");
    await connectMongoDB();
    await Topic.findByIdAndDelete(title);
    return NextResponse.json({message:"Topic deleted"},{status:200})
}
