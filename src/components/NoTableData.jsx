export default function NoTableData({ tableType }) {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td
        className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 h-24 text-center"
        colspan="7"
      >
        No {tableType} found.
      </td>
    </tr>
  );
}
