import React, { useState } from "react"
import { ReportCard } from "./components/ReportCard"
import { EditForm } from "./components/EditForm"

const initialData = {
  date: "02-11-2025",
  district: "3",
  zone: "K",
  psr: "Sabir",
  outletPlan: 10,
  lrbSale: 80
}

const App = () => {
  const [reportData, setReportData] = useState(initialData)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = updatedData => {
    setReportData(updatedData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        {isEditing ? (
          <EditForm
            initialData={reportData}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <ReportCard data={reportData} onEdit={() => setIsEditing(true)} />
        )}
      </div>
      <footer className="absolute bottom-4 text-center w-full text-gray-500 text-sm">
        <p>Smart Report Card Application</p>
      </footer>
    </div>
  )
}

export default App
