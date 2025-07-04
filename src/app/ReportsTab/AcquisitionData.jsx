export default function AcquisitionData() {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
        Computers
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
        350
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
        50
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
        400
      </td>
    </tr>
  );
}
