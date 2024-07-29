import BlogCard from "@/components/blog-card";
import Form from "@/components/form";
import { InlineSnippet } from "@/components/form/domain-configuration";
import ChatService from "@/components/multimedia/chat";
import { Pick } from "@prisma/client/runtime/library";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
      <Image
        width={1000}
        height={512}
        src="/home.png"
        alt="Curiosity and enthusiasm"
        className="w-auto"
      />
      <h1 className="text-white">
        Entered Chat App
        {/* <InlineSnippet className="ml-2 bg-blue-900 text-blue-100">
          app/home/page.tsx
        </InlineSnippet> */}
        <div className="ml-2 bg-blue-500 text-red-100">
          <ChatService />
        </div>
      </h1>
    </div>
  );
}
