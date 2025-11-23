import React, { useState } from "react"
import { Card } from "./Card"
import { SaveIcon } from "./icons/SaveIcon"
import { CancelIcon } from "./icons/CancelIcon"

const InputField = ({ label, id, type = "text", value, onChange }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      min={type === "number" ? 0 : undefined}
      required
    />
  </div>
)

export const EditForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData)

  const handleChange = e => {
    const { id, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: type === "number" ? (value === "" ? "" : Number(value)) : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const finalData = {
      ...formData,
      outletPlan: Number(formData.outletPlan),
      lrbSale: Number(formData.lrbSale)
    }
    onSave(finalData)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Edit Report
          </h3>
          <div className="space-y-4">
            <InputField
              label="PSR Name"
              id="psr"
              value={formData.psr}
              onChange={handleChange}
            />
            <InputField
              label="Date"
              id="date"
              type="text"
              value={formData.date}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="District"
                id="district"
                value={formData.district}
                onChange={handleChange}
              />
              <InputField
                label="Zone"
                id="zone"
                value={formData.zone}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Outlet Plan"
                id="outletPlan"
                type="number"
                value={formData.outletPlan}
                onChange={handleChange}
              />
              <InputField
                label="LRB Sale"
                id="lrbSale"
                type="number"
                value={formData.lrbSale}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-3 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <CancelIcon className="h-4 w-4 mr-2" />
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <SaveIcon className="h-4 w-4 mr-2" />
            Save
          </button>
        </div>
      </form>
    </Card>
  )
}
