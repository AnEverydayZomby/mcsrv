import test from "ava"
import { mcsrv } from "."

test("main", async (t) => {
    const data = await mcsrv("play.aneverydayzombie.com");
    t.true(data.online)
    console.log(data);
})
