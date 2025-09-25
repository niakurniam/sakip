import React from "react";
import { useLocation } from "react-router-dom";
import ContactUs from "../components/ContactUs";

// import responsive helpers
import { OnlyMobile, OnlyTablet, OnlyDesktop } from "../components/DeviceVisibility";

const getDocumentTitle = (file) => {
  if (!file) return "";
  if (file === "RIP_PPNS_2015-2039.pdf") return "RIP PPNS 2015-2039";
  if (file === "RIP_PPNS_2015-2045.pdf") return "RIP PPNS 2015-2045";
  // fallback: remove extension and replace _ with space
  return file.replace(/\.pdf$/i, "").replace(/_/g, " ");
};

const PdfViewer = () => {
  const query = new URLSearchParams(useLocation().search);
  const file = query.get("file");
  const docTitle = getDocumentTitle(file);

  const data = {
    "NILAI_SAKIP_PPNS_2021.pdf": "1AdhM9Vh7zHuYppuwqUpPxOJ1pYQNkTR2",
    "NILAI_SAKIP_PPNS_2022.pdf": "1jRf4bCF32Qn86COvV00hVp9ihGg03jab",
    "NILAI_SAKIP_PPNS_2023.pdf": "1yclyvP41-WERb87bfBdZuqdD0zYuTxK3",
    "NILAI_SAKIP_PPNS_2024.pdf": "1Abogugy8RyuKzN25QPLVmGQmUVbXaUxg",
    "RIP_PPNS_2015-2039.pdf": "1NCi_P6cEtTpe-gIx8uHm_7WUOcjT_qak",
    "RIP_PPNS_2015-2045.pdf": "1MiQ-SZ7UkxrXS2x12K35-mgnXQaFxImv",
    "RENSTRA_PPNS_2025-2029.pdf": "1U5BynL2le9lnRXUScQSyFTe6QPwTWlNM",
    "RENSTRA_PPNS_2020-2024.pdf": "1CCznrlwC2JAD8XVVHMrejboH1UuBtUfb",
    "RENSTRA_PPNS_2025_2029": "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
    "RENAKSI_PPNS_2025.pdf": "1KcqKhG1t7RLRb3Q-DaE9Q6JVAJvkmnyZ",
    "RENAKSI_PPNS_2024.pdf": "15LKiKZp2Qfgx2eGerWbGMOCeGpYC3tEn",
    "RENAKSI_PPNS_2023.pdf": "1lusVO9rxzy7Z-p3oRqstBDHmyYkpeMDj",
    "RENAKSI_PPNS_2022.pdf": "",
    "RENAKSI_PPNS_2021.pdf": "1bcYn7nFS-3T2FvxviI-7bflvaGZDEblN",
    "LAKIN_PPNS_2015_2024.pdf": "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
    "PK_PPNS_2016_2025.pdf": "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
  }

  console.log("CEK DATA", data[file]); 

  console.l
  return (
    <>
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-8">
          <h1 className="text-xl font-bold text-[#0a4a8e] mb-4 text-center">
            {docTitle ? `Lihat Dokumen: ${docTitle}` : "Lihat Dokumen PDF"}
          </h1>
          {file ? (
            <iframe
              src={`https://drive.google.com/file/d/${data[file]}/preview`}
              title={docTitle || file}
              className="w-full h-[70vh] rounded-lg border"
            />
          ) : (
            <p className="text-center text-gray-500">File tidak ditemukan.</p>
          )}
        </div>
      </div>

      <OnlyMobile>
        <ContactUs />
      </OnlyMobile>

      <OnlyTablet>
        <ContactUs />
      </OnlyTablet>

      <OnlyDesktop>
        <ContactUs />
      </OnlyDesktop>
    </>
  );
};

export default PdfViewer;