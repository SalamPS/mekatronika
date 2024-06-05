import { NextResponse } from "next/server"
import dbConnect from "@/models/mongodb"
import Mekatronika_Tirai from '../../../models/modelMekatronika'

export async function GET (request) {
  await dbConnect()
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')
  const DEVICE_ID = process.env.DEVICE_ID;

  try {
    // const query = new Mekatronika_Tirai({nama: "salam", action: false})
    // query.save()
    // console.log(query)
    await Mekatronika_Tirai.findByIdAndUpdate(DEVICE_ID, { action }, { new: true });
    return NextResponse.json({action: true}, {status: 200})
  }
  catch {return NextResponse.json({messsage: "Gagal"}, {status: 400})}
}