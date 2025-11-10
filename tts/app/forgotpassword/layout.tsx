

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <div className="relative h-screen w-full">
   
      <div className="static bottom-0  hidden w-[300px] h-[300px] bg-radial rounded-full from-10% from-[#D7DEFC]! to-100% to-white!"></div>
      <main className="">{children}</main>
    </div>
  );
}
