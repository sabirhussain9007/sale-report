import React, { useRef } from "react"
import { toPng } from 'html-to-image';
import { Card } from "./Card"
import { EditIcon } from "./icons/EditIcon"
import { DownloadIcon } from "./icons/DownloadIcon"

const DataRow = ({ label, value, isHighlighted = false }) => (
  <div className="flex justify-between items-center py-3 px-6 border-b border-gray-100 last:border-b-0">
    <p className="text-lg font-bold text-gray-500 ">{label}</p>
    <p
      className={`text-lg font-bold bg-slate-300 rounded-full w-24 text-center ${
        isHighlighted ? "text-indigo-600 " : "text-gray-800 "
      }`}
    >
      {value}
    </p>
  </div>
)

export const ReportCard = ({ data, onEdit }) => {
  const cardRef = useRef(null)

  const dropSize =
    data.outletPlan > 0 ? (data.lrbSale / data.outletPlan).toFixed(2) : "N/A"

  const handleDownload = () => {
    if (cardRef.current) {
      toPng(cardRef.current, { backgroundColor: "#f9fafb" })
        .then(dataUrl => {
          const link = document.createElement("a")
          link.download = `report-card-${data.psr
            .toLowerCase()
            .replace(" ", "-")}.png`
          link.href = dataUrl
          link.click()
        })
        .catch(error => {
          console.error("Oops, something went wrong!", error)
        })
    }
  }

  return (
    <div className="relative">
      <Card className="w-full max-w-md mx-auto">
        <div ref={cardRef} className="bg-white">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
            <p className="text-lg uppercase font-bold tracking-wider">{data.date}</p>
            <h2 className="text-2xl font-bold mt-1">{data.psr}</h2>
            <p className="text-sm font-bold opacity-80">{`District: ${data.district} | Zone: ${data.zone}`}</p>
          </div>
          <div className="bg-gray-100 font-bold ">
            <DataRow label="Outlet Plan" value={data.outletPlan} />
            <DataRow label="LRB Sale" value={data.lrbSale} />
            <DataRow label="Drop Size" value={dropSize} isHighlighted={true} />
          </div>
        </div>
      </Card>

      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={onEdit}
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-colors"
          aria-label="Edit Report"
        >
          <EditIcon className="h-5 w-5" />
        </button>
        <button
          onClick={handleDownload}
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-colors"
          aria-label="Download Report as Image"
        >
          <DownloadIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
