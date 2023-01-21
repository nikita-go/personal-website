import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../../components/global/Header";
import { Footer } from "../../components/global/Footer";
import fs from "fs";
import matter from "gray-matter";

export default function Tags(props) {
    const tags = props.tags;
    let countedTags = {};
    tags.forEach((tag) => {
        if (tag in countedTags) {
            countedTags[tag]++;
        }
        else {
            countedTags[tag] = 1;
        }
    });
    const sortedTags = Object.entries(countedTags)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
    return(
        <>
            <Head>
                <title>Tags | Nikita Gorshkov</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col min-h-screen">
                <Header />
                <div className="flex justify-center items-center grow">
                    <div className="flex flex-row items-center justify-center w-[50%] space-x-6">
                        <h1 className="text-5xl font-bold text-white">Tags</h1>
                        <div className="border-l-2 pl-6 py-2">
                            <div className="flex max-w-xl flex-wrap text-blue-500 font-medium">
                                {sortedTags.map(({ tag, count }) => (
                                    <div key={tag} className="py-1 pr-4 text-base uppercase">
                                        <Link href={`/tags/${tag}`}>{tag} <span className="font-normal text-gray-400">{` (${count})`}</span></Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");
    const posts = files.map((post) => {
        const fileContent = fs.readFileSync(`${process.cwd()}/posts/${post}`, "utf-8");
        const parsedContent = matter(fileContent);
        return parsedContent;
    });
    let tags = [];
    posts.forEach((post) => {
        if (post?.data?.tags) {
            tags = [...tags, ...post.data.tags];
        }
    });
    return {
        props: {
            tags
        }
    }
}