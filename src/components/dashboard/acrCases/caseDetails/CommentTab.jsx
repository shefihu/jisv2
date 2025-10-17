import SecondaryTableContent from "../../../../common/table/SecondaryTableContent";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";

function CommentTab() {
  const commentTableData = [
    {
      id: 1,
      comment:
        "A balance of N4,000 have to be paid as you checked 2 declaration and uploaded 6 declarations",
      commentBy: "PSA Officer - John Joe",
    },
  ];
  const commentTableColumns = [
    {
      key: "comment",
      header: "Comment",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "justify",
    },

    {
      key: "commentBy",
      header: "Comment By",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
  ];
  return (
    <div className="table_section">
      <TableTitleHeader title="Comment" isRoundedBorder={true} />
      <div className="secondary_table_wrapper">
        <div className="secondary_table_content">
          <SecondaryTableContent
            data={commentTableData}
            columns={commentTableColumns}
          />
        </div>
      </div>
    </div>
  );
}

export default CommentTab;
