import React, { useState } from "react"

import { companyBiographies, constants, keywordPhrases } from "./constants"

const selectOptions = [
  { value: "random", label: "Random" },
  { value: "healthcare", label: "Healthcare" },
  { value: "agriculture", label: "Agriculture" },
  { value: "environment", label: "Environment" },
  { value: "energy", label: "Energy" },
  { value: "space", label: "Space" },
  { value: "defense", label: "Defense" },
  { value: "education", label: "Education" },
  { value: "transportation", label: "Transportation" },
  { value: "ocean_sciences", label: "Ocean Sciences" },
  { value: "measurement_techniques", label: "Measurement Techniques" },
  { value: "homeland_security", label: "Homeland Security" }
]

function IndexPopup() {
  const [selectedOption, setSelectedOption] = useState("random")
  const [hasCopied, setHasCopied] = useState(false)
  const [hasCopiedKeyword, setHasCopiedKeyword] = useState(false)
  const [hasCopiedCompanyBiography, setHasCopiedCompanyBiography] =
    useState(false)

  const handleCopyOptionToClipboard = () => {
    let textToCopy = ""
    if (selectedOption === "random") {
      const randomIndex = Math.floor(Math.random() * selectOptions.length)
      textToCopy = constants[selectOptions[randomIndex].value]
    } else {
      textToCopy = constants[selectedOption]
    }
    navigator.clipboard.writeText(textToCopy)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 1500)
  }

  const handleCopyRandomKeywordToClipboard = () => {
    const randomIndex = Math.floor(Math.random() * keywordPhrases.length)
    const textToCopy = keywordPhrases[randomIndex]
    navigator.clipboard.writeText(textToCopy)
    setHasCopiedKeyword(true)
    setTimeout(() => {
      setHasCopiedKeyword(false)
    }, 1500)
  }

  const handleCopyRandomCompanyBiographyToClipboard = () => {
    const randomIndex = Math.floor(Math.random() * companyBiographies.length)
    const textToCopy = companyBiographies[randomIndex]
    navigator.clipboard.writeText(textToCopy)
    setHasCopiedCompanyBiography(true)
    setTimeout(() => {
      setHasCopiedCompanyBiography(false)
    }, 1500)
  }

  return (
    <div
      style={{
        padding: 16
      }}>
      <h4 style={{ textAlign: "center", marginTop: "0", marginBottom: 8 }}>
        TurboSBIR/TurboInnovate Dev Extension
      </h4>
      <hr
        style={{
          marginTop: 0,
          marginBottom: 16,
          border: "none",
          borderBottom: "1px solid #ddd"
        }}
      />
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "gray"
          }}>
          Copy a technology description to your clipboard
        </p>
        <label
          htmlFor="select"
          style={{
            textTransform: "uppercase",
            color: "gray",
            fontSize: 8
          }}>
          Industry Field
        </label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          style={{ width: "100%" }}>
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={handleCopyOptionToClipboard}
          style={{ marginTop: 8, width: "100%" }}>
          {hasCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
      <hr
        style={{
          marginTop: 16,
          marginBottom: 16,
          border: "none",
          borderBottom: "1px solid #ddd"
        }}
      />
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "gray"
          }}>
          Copy a random keyword phrase to your clipboard
        </p>
        <button
          onClick={handleCopyRandomKeywordToClipboard}
          style={{ marginTop: 8, width: "100%" }}>
          {hasCopiedKeyword ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
      <hr
        style={{
          marginTop: 16,
          marginBottom: 16,
          border: "none",
          borderBottom: "1px solid #ddd"
        }}
      />
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "gray"
          }}>
          Copy a company biography to your clipboard
        </p>
        <button
          onClick={handleCopyRandomCompanyBiographyToClipboard}
          style={{ marginTop: 8, width: "100%" }}>
          {hasCopiedCompanyBiography ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  )
}

export default IndexPopup
