import SideBar from "@/components/settings/sidebar";

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[inherit]! w-full gap-5! justify-between grid grid-flow-col  grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-y-hidden">
      <SideBar />
      <main className=" col-start-2 col-end-auto h-[inherit]!   px-5! py-6! rounded-xl bg-white border-[0.5px]!  border-[#DDDDDD]!">{children}</main>
    </div>
  );
}
