import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { get } from "http";

connect();

export async function GET(request:NextRequest){
    try {
        getDataFromToken(request);

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}