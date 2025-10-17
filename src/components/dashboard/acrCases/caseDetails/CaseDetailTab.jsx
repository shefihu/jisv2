import React from "react";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";
import SecondaryTableContent from "../../../../common/table/SecondaryTableContent";
import CaseDetailsCard from "./CaseDetailsCard";

function CaseDetailTab() {
  const SecondaryTableData = [
    {
      id: 1,
      claimOffences:
        "A DECLARATION that the post no-debit placed by the Respondent on the Applicant's Account Number: 0053522833 with Account Name: OSITE WORLD INTERNATIONAL LIMITED without a valid Order of Court and without due process of law from the 30th day of September, 2019 to the month of January, 2020 was improper, wrongful, unconstitutional, illegal, null and void and constituted a gross violation of the Applicant's Fundamental Rights to own and possess property, as enshrined under Sections 43 and 44(1) of the Constitution of the Federal Republic of Nigeria, as amended, Article 17(1) of the United Nations Declaration of Human Rights and Article 14 of the African Charter on Human and Peoples Rights.",
      claimValue: "N2,000,000",
      claimType: "Monetary",
    },
  ];
  const legalCounselData = [
    {
      id: 1,
      name: "Awwal M. Bello ESQ",
      counselFor: "Claimant",
      phoneNumber: "08065262763",
      email: "awwalmuha...@gmail.com",
    },
  ];

  const secondaryTableColumns = [
    {
      key: "claimOffences",
      header: "Claim/Offences",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "justify",
    },
    {
      key: "claimValue",
      header: "Claim Value",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
    {
      key: "claimType",
      header: "Claim Type",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
  ];
  const legalCounselColumns = [
    {
      key: "name",
      header: "Name",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
    {
      key: "counselFor",
      header: "Counsel For",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
    {
      key: "phoneNumber",
      header: "Phone Number",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
    {
      key: "email",
      header: "Email",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
  ];

  return (
    <div className="case_details_wrapper">
      <CaseDetailsCard />

      <div className="table_section">
        <TableTitleHeader title="Claim Details" isRoundedBorder={true} />
        <div className="secondary_table_wrapper">
          <div className="secondary_table_content">
            <SecondaryTableContent
              data={SecondaryTableData}
              columns={secondaryTableColumns}
            />
          </div>
        </div>
      </div>
      <div className="table_section">
        <TableTitleHeader title="Claim Details" isRoundedBorder={true} />
        <div className="secondary_table_wrapper">
          <div className="secondary_table_content">
            <SecondaryTableContent
              data={legalCounselData}
              columns={legalCounselColumns}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetailTab;
