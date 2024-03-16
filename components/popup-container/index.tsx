import { Clipboard, Settings } from "lucide-react"
import React from "react"

type PopupContainerProps = {
  children: React.ReactNode
  view: "clipboard" | "settings"
  setView: React.Dispatch<React.SetStateAction<"clipboard" | "settings">>
}

export const PopupContainer = (props: PopupContainerProps) => {
  const { children, setView, view } = props
  return (
    <div className="relative w-full">
      <div className="p-4 pb-16 h-[500px] overflow-y-auto w-[250px]">
        {children}
      </div>
      <div className="fixed bottom-0 flex flex-row justify-around align-middle p-4 w-full bg-slate-700">
        <Clipboard
          size={24}
          className={`cursor-pointer ${view === "clipboard" ? "text-red-500" : "text-slate-50"}`}
          onClick={() => setView("clipboard")}
        />
        <Settings
          size={24}
          className={`cursor-pointer ${view === "settings" ? "text-red-500" : "text-slate-50"}`}
          onClick={() => setView("settings")}
        />
      </div>
    </div>
  )
}
