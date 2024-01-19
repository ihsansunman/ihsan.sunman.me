import TopMenu from "@/components/ui/topMenu";
import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <TopMenu />
      {children}
    </main>
  );
};

export default Template;
