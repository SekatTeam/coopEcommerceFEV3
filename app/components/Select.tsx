"use client"

import { Select } from "@chakra-ui/react"

interface Option {
  value: string;
  label: string;
}

export const SelectItem = ({ label, options }: { label?: string; options?: Option[] }) => {
  return (
    <Select placeholder={label || "Select"} size="sm" borderColor="#c4c4c4"
    >
      {options?.map((option: Option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}
