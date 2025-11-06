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
    "RENSTRA_PPNS_2015-2019.pdf": "1NipzheXe_Bwi6PPiYJXCDLHUGROFi-U7",
    "RENSTRA_PPNS_2025_2029": "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
    "RENAKSI_PPNS_2025.pdf": "1KcqKhG1t7RLRb3Q-DaE9Q6JVAJvkmnyZ",
    "RENAKSI_PPNS_2024.pdf": "15LKiKZp2Qfgx2eGerWbGMOCeGpYC3tEn",
    "RENAKSI_PPNS_2023.pdf": "1lusVO9rxzy7Z-p3oRqstBDHmyYkpeMDj",
    "RENAKSI_PPNS_2022.pdf": "1VGbjndm60b4WnrL-EDpi7tTXjL3q8uy8",
    "RENAKSI_PPNS_2021.pdf": "1bcYn7nFS-3T2FvxviI-7bflvaGZDEblN",
    "LAKIN_PPNS_2015_2024.pdf": "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
    "PK_PPNS_2016_2025.pdf": "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",

    //list pk_ppns files
    "PK_PPNS_2025.pdf": "145q8FL36k21hQ5ny8ISQ57R02QfMd5FF",
    "PK_PPNS_2024.pdf": "1ZKkle0Oj3Z8vDJvR8t36UpPR4jp8qyQO",
    "PK_PPNS_2023.pdf": "1XIa0PNwdD5S_i8Lm_sV9ZZty53goqgVN",
    "PK_PPNS_2022.pdf": "1kC8FjZ2WQXyTgH7NaczQwJELH7lw8DqI",
    "PK_PPNS_2021.pdf": "1zgip-XUM8c_vy82Jod88lw_nOYzmT8OP",
    "PK_PPNS_2020.pdf": "1gPA3NDPF1hhz5LZffjOVEn7ousJsBR0K",

    //list lakin files
    "LAKIN_PPNS_2025.pdf": "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
    "LAKIN_PPNS_2024.pdf": "19pJNV8bls9n7X82FBemI9jgaJPIu4VzI",
    "LAKIN_PPNS_2023.pdf": "1Okuj7qmXKZ2m_Z59sDve-0oIdUcRbdq4",
    "LAKIN_PPNS_2022.pdf": "1dDZZ2IVnJnhcew_N1VtV6z1BdgPBjVW8",
    "LAKIN_PPNS_2021.pdf": "1y0AsFGzmX6duO7HdyaVkwA5jNpUENuB6",
    "LAKIN_PPNS_2020.pdf": "1lWTKTk2oT8Ura2xomDlfwAMSFgVQ4dBm",
    "LAKIN_PPNS_2019.pdf": "1fZfVpygfVKV4QkTRgvKboPHyeIL9k1fL",
    "LAKIN_PPNS_2018.pdf": "1XgeRHtIAMqBm2HwtbxQ2JnEWOI2tFuBX",
    "LAKIN_PPNS_2017.pdf": "1EGuATxrsTBONkg6pCpl1vSWfD6aDq8RT",
    "LAKIN_PPNS_2016.pdf": "1c_JZ7MF7RIfMKg_MDOsjdcyuoDWc0GA_",
    "LAKIN_PPNS_2015.pdf": "1RCW-3lV5Cm7GZxAz7_l3OaW1hVG3JIeB",
    // "LAKIN_PPNS_2016.pdf": "1lWTKTk2oT8Ura2xomDlfwAMSFgVQ4dBm",

  }

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