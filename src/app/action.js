"use server";
import db from "../../services/db";
export async function getDatPost() {
    let posts = await db.query("select * from posts");

    for (let i = 0; i < posts.length; i++) {
        posts[i].reply = await db.query(
            "select * from post_reply where post_id=?",
            [posts[i]["⁯post_id"]]
        );
        posts[i].id_post = posts[i]["⁯post_id"];
    }
    return posts;
}

export async function getDataReplyPerPost(id) {
    let reply = await db.query("select * from post_reply where post_id=?", [
        id,
    ]);

    return reply;
}

export async function insertPostReply(data) {
    let now = new Date().toISOString().slice(0, 19).replace("T", " ");
    let insert_data = await db.query(
        "insert into post_reply(post_id,created_at,name,text) values(?,?,?,?)",
        [data.post_id, now, data.name, data.text]
    );

    return insert_data;
}
