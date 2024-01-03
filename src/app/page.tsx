import Link from "next/link";

import TrendNew from "@/components/sections/trendNew";
export default function Home() {
    return (
        <>
            <Link href="/admin">admin</Link>
            <div
                style={{
                    color: "red",
                    width: "200px",
                    height: "100px",
                    border: "1px solid red",
                    margin: "10px",
                }}
            >
                test
            </div>
            <div>
                <h2>Trend New</h2>
                <TrendNew />
            </div>
        </>
    );
}
