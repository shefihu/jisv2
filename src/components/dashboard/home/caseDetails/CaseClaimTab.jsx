import SecondaryTableContent from "../../../../common/table/SecondaryTableContent";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";

function CaseClaimTab() {
  const claimTableData = [
    {
      id: 1,
      claimOffences:
        "A DECLARATION that the post no-debit placed by the Respondent on the Applicant's Account Number: 0053522833 with Account Name: OSITE WORLD INTERNATIONAL LIMITED without a valid Order of Court and without due process of law from the 30th day of September, 2019 to the month of January, 2020 was improper, wrongful, unconstitutional, illegal, null and void and constituted a gross violation of the Applicant's Fundamental Rights to own and possess property, as enshrined under Sections 43 and 44(1) of the Constitution of the Federal Republic of Nigeria, as amended, Article 17(1) of the United Nations Declaration of Human Rights and Article 14 of the African Charter on Human and Peoples Rights.",
      partyName: "Salman Lukman Olayinka",
    },
    {
      id: 2,
      claimOffences:
        "A DECLARATION that the post no-debit placed by the Respondent on the Applicant's Account Number: 0053522833 with Account Name: OSITE WORLD INTERNATIONAL LIMITED without a valid Order of Court and without due process of law from the 30th day of September, 2019 to the month of January, 2020 was improper, wrongful, unconstitutional, illegal, null and void and constituted a gross violation of the Applicant's Fundamental Rights to own and possess property, as enshrined under Sections 43 and 44(1) of the Constitution of the Federal Republic of Nigeria, as amended, Article 17(1) of the United Nations Declaration of Human Rights and Article 14 of the African Charter on Human and Peoples Rights.",
      partyName: "Salman Lukman Olayinka",
    },
  ];

  const claimTableColumns = [
    {
      key: "claimOffences",
      header: "Claim/Offences",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "justify",
    },

    {
      key: "partyName",
      header: "Party Name",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
  ];
  return (
    <div className="table_section">
      <TableTitleHeader title="Case Claim " isRoundedBorder={true} />
      <div className="secondary_table_wrapper">
        <div className="secondary_table_content">
          <SecondaryTableContent
            data={claimTableData}
            columns={claimTableColumns}
          />
        </div>
      </div>
    </div>
  );
}

export default CaseClaimTab;
