import { NextResponse } from "next/server"
import dbConnect from "@/models/mongodb"
import Mekatronika_Tirai from '../../../models/modelMekatronika'

export async function GET (request) {
  await dbConnect()
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')
  const DEVICE_ID = process.env.DEVICE_ID;

  try {
    if (action === "selesai") {
      await Mekatronika_Tirai.findByIdAndUpdate(DEVICE_ID, { action : "Tidak ada aksi diperlukan" }, { new: true });
      return new Response("Berhasil menutup")
    }
    const res = await Mekatronika_Tirai.findOne({_id: DEVICE_ID});
    return new Response(res.action)
  }
  catch {return new Response("")}
}