import db from "../../../../services/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    let posts = await db.query("select * from posts");

    for (let i = 0; i < posts.length; i++) {
        posts[i].reply = await db.query(
            "select * from post_reply where post_id=?",
            [posts[i]["⁯post_id"]]
        );
    }

    return NextResponse.json({ status: posts });
}
